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
          "Generate me a coding task in JavaScript and give the right output so I can compare it later. Give me response back in JSON format with following structure: task, function_signature, code_solution, test_cases. Please give me exact format since I will apply JSON.parse() on it to get all the fields later.",
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

  // @ts-ignore
  console.log(data);

  // generate coding task for everybody
  const codingTask = await generateTournamentTasks();

  console.log(codingTask[0]);

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
    ]);
};
