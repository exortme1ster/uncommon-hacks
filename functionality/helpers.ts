import { supabase } from "@/functionality/supabase";
import { openai } from "./chatgpt";

export const insertUser = async () => {
  // get current user
  const {
    data: { user },
  } = await supabase.auth.getUser();
  // check if this user exists
  let { data: checkExistingUser, error } = await supabase
    .from("users")
    .select("*")
    .match({ user_id: user?.id });
  // if it doesn't exist, add him to users table
  if (checkExistingUser?.length === 0) {
    const { data, error } = await supabase.from("users").insert([
      {
        user_id: user?.id,
        friends: [],
      },
    ]);
  }
};

function isJsonString(str: string) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

export const generateTask = async () => {
  const task = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content:
          "Generate me a coding task in JavaScript and give the right output so I can compare it later. Give me response back in JSON format with following structure: task, function_signature (in format of function() {}), code_solution, test_cases. Please give me exact format since I will apply JSON.parse() on it to get all the fields later. Make sure there are 4(four) tests that are constructed in the form input: function_call(parameters), output: data. Make sure you follow the structure of tests since I will insert them directly into compiler to compare outputs. Makue sure that form of tests are always the same and there are 4 tests in total.",
      },
    ],
  });
  // @ts-ignore
  if (isJsonString(task.data.choices[0].message?.content)) {
    // @ts-ignore
    let data = JSON.parse(task.data.choices[0].message?.content);
    let generatedTask = {
      task: data["task"],
      function_signature: data["function_signature"],
      code_solution: data["code_solution"],
      test_cases: data["test_cases"],
    };

    return generatedTask;
  } else {
    return false;
  }
};

export const generateTournamentTasks = async () => {
  let tournamentTasks = [];

  while (tournamentTasks.length !== 1) {
    const task = await generateTask();

    if (task !== false) {
      tournamentTasks.push(task);
    }
  }

  return tournamentTasks;
};

export const getAllUsers = async () => {
  try {
    const { data, error } = await supabase.from("users").select("*");

    return data;
  } catch (error: any) {
  } finally {
  }
};

export const getCurrentUser = async (user_id: any) => {
  try {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .match({ user_id: user_id });
    return data![0];
  } catch (error: any) {
  } finally {
  }
};

export const getTournaments = async () => {
  let { data: tournaments, error } = await supabase
    .from("tournaments")
    .select("*");

  return tournaments;
};

export const getSpecificTournament = async (user_id: any) => {
  let { data: tourney_id, error: newError } = await supabase
    .from("users")
    .select("current_tournament")
    .match({ user_id: user_id });

  console.log(tourney_id);
  console.log(newError);
  if (tourney_id === null) return;

  let { data: tournaments, error } = await supabase
    .from("tournaments")
    .select("*")
    .match({ id: tourney_id![0]?.current_tournament });

  return tournaments;
};

export const getSpecificTournamentTask = async (tourney_id: any) => {
  let { data: tournaments, error } = await supabase
    .from("tournaments")
    .select("tasks")
    .match({ id: tourney_id });

  let { data: task, error: task_error } = await supabase
    .from("tasks")
    .select("*")
    .match({ id: tournaments![0].tasks[0] });

  console.log(task);

  // @ts-ignore
  task![0].tests = task![0].tests.map((obj) => {
    const cleanedStr = obj.replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g, '"$2": ');
    return JSON.parse(cleanedStr);
  });

  console.log(task);

  return task![0];
};

// @ts-ignore
export const addTournament = async (name, id) => {
  // Get the current date and time
  const currentDateTime = new Date();

  // Add two hours to the current datetime
  const newDateTime = new Date(currentDateTime.getTime() + 2 * 60 * 60 * 1000);

  // Format the new datetime object in ISO format
  const newDateTimeIso = newDateTime.toISOString();
  const { data, error } = await supabase
    .from("tournaments")
    .insert([
      {
        name: name,
        users: [id],
        status: "going",
        endtime: newDateTimeIso,
        submissions: [],
        tasks: [],
      },
    ])
    .select();

  // generate coding task for everybody
  const codingTask = await generateTournamentTasks();

  // @ts-ignore
  const test_cases_strings = codingTask[0].test_cases.map((obj) => {
    const entries = Object.entries(obj);
    const properties = entries.map(([key, value]) => `${key}: "${value}"`);
    return `{ ${properties.join(", ")} }`;
  });

  const { data: coding_task, error: coding_error } = await supabase
    .from("tasks")
    .insert([
      {
        // @ts-ignore
        tournament_id: data[0].id,
        prompt: codingTask[0].task,
        correct_output: codingTask[0].code_solution,
        function_signature: codingTask[0].function_signature,
        tests: test_cases_strings,
      },
    ])
    .select();

  const { data: again, error: againE } = await supabase
    .from("tournaments")
    .update({ tasks: `{${coding_task![0].id}}` })
    .eq("id", data![0].id);

  // WE NEED TO ALSO ADD TOURNAMENT TO USER
  const { data: onceAgain, error: onceAgainE } = await supabase
    .from("users")
    .update({ current_tournament: data![0].id })
    .eq("user_id", id);

  return data![0].id;
};

// @ts-ignore
export const compileCode = async (code, tests) => {
  let answers = [];
  for (let i = 0; i < tests.length; i++) {
    let test = tests[i];

    const prompt = `Does the following code (written in JavaScript):\n\n${code}\n\npass the following test case?\ninput: ${test.input}\noutput: ${test.output}\n\nAnswer: YES or NO`;

    const task = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    const answer = task.data.choices[0].message?.content;
    // @ts-ignore
    let reponse = answer.split(" ")[0];
    console.log(reponse);
    let final_answer = reponse.replace(/[^a-zA-Z]/g, "").toLowerCase();
    console.log(final_answer);
    answers.push(final_answer);
  }
  return answers;
};

// @ts-ignore
export const makeSubmission = async (userid, answers_arr, code, t_id) => {
  let score = 0;

  for (let i = 0; i < answers_arr.length; i++) {
    if (answers_arr[i] === "yes") {
      score += 25;
    }
  }

  const { data, error } = await supabase
    .from("submissions")
    .insert([
      { user_id: userid, score: score, code: code, tournament_id: t_id },
    ])
    .select();

  let { data: new_sub, error: e1 } = await supabase
    .from("tournaments")
    .select("submissions")
    .match({ id: t_id });

  console.log(new_sub);
  // @ts-ignore
  new_sub.push(data[0].id);

  console.log(new_sub);

  // const { data: d, error: e } = await supabase
  //   .from("tournaments")
  //   // @ts-ignore
  //   .update({ submissions: new_sub })
  //   .eq("id", t_id);

  return score;
};
