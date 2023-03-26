import React, { FC, useRef, useEffect, useState } from "react";
import {
  GameMain,
  ShowGame,
  ShowGameDescription,
  ShowGameTitle,
  ShowGameCode,
  Mover,
  Handle,
  SubmitCode,
  TestCases,
  TestCaseTitle,
  TestCase,
} from "../../pages/play/game/game.styles";

import Editor, { useMonaco } from "@monaco-editor/react";
import { users } from "@/functionality/data";
import { useSelector } from "react-redux";
import { Check } from "@/assets/Check";
import { Close } from "@/assets/Close";
import {
  compileCode,
  generateTask,
  getSpecificTournament,
  makeSubmission,
} from "@/functionality/helpers";
import { Loader } from "../Loader/Loader";

const allTestCases = [
  { score: true },
  { score: false },
  { score: true },
  { score: false },
];

interface GameComponentInterface {
  tournamentid: string;
  tournament: any;
}

const dummyOutput: number[] = [12, 20, 0];

const GameComponent: FC<GameComponentInterface> = ({
  tournamentid,
  tournament,
}) => {
  const editorRef = useRef(null);
  const monaco = useMonaco();

  const { user } = useSelector((state: any) => state.userReducer);

  const [moveBackground, setMoveBackground] = useState(0);

  const [loading, setLoading] = useState(false);
  const [testLoading, setTestLoading] = useState(false);

  const [task, currentTask] = useState<any>();

  const [results, changeResults] = useState<any>();
  useEffect(() => {
    setLoading(true);

    if (tournamentid === "") {
      generateTask().then((response: any) => {
        currentTask(response);
        changeResults(response.test_cases);
        setLoading(false);
      });
    } else {
      getSpecificTournament(tournamentid).then((response: any) => {
        currentTask(response);
        changeResults(response.tests);
        setLoading(false);
      });
    }
  }, []);

  function handleEditorDidMount(editor: any, monaco: any) {
    editorRef.current = editor;
  }

  async function showValue() {
    if (editorRef.current !== null) {
      console.log(task);
      // @ts-ignore
      setTestLoading(true);
      if (tournamentid === "") {
        // @ts-ignore
        const results = await compileCode(
          editorRef.current.getValue(),
          task.test_cases
        );
        // @ts-ignore
        changeResults((prevState: any) => {
          return prevState.map((prev: any, i: number) => {
            return {
              expected_output: prev.expected_output,
              input: prev.input,
              score: results[i] === "yes",
            };
          });
        });
      } else {
        // @ts-ignore
        const results = await compileCode(
          editorRef.current.getValue(),
          task.tests
        );
        // @ts-ignore
        changeResults((prevState: any) => {
          return prevState.map((prev: any, i: number) => {
            return {
              expected_output: prev.expected_output,
              input: prev.input,
              score: results[i] === "yes",
            };
          });
        });

        await makeSubmission(user.id, results, editorRef.current.getValue(), tournamentid)
      }
      setTestLoading(false);
    }
  }

  useEffect(() => {
    // do conditional chaining
    monaco?.languages.typescript.javascriptDefaults.setEagerModelSync(true);
    // or make sure that it exists by other ways
    if (monaco) {
      console.log("here is the monaco instance:", monaco);
    }
  }, [monaco]);

  const correct = results
    ?.map((score: any, i: number) => {
      if (score.score) {
        return 1;
      }

      if (score.score === undefined) {
        return -1;
      }
      return 0;
    })
    .reduce((acc: any, current: any) => acc + current);

  return (
    <GameMain
      style={{
        gridTemplateColumns: `${1 + moveBackground}fr 2px 1fr`,
      }}
    >
      <ShowGame>
        <ShowGameTitle>Hello, {user.email}</ShowGameTitle>
        <ShowGameDescription>
          ChatGPT {loading ? "is generating" : "generated"} a coding question
          for you ;)
        </ShowGameDescription>
        {!loading ? (
          <ShowGameCode>
            {tournamentid === "" ? task?.task : task?.prompt}
          </ShowGameCode>
        ) : (
          <></>
        )}
      </ShowGame>
      <Mover>
      </Mover>
      {!loading ? (
        <div>
          <Editor
            onMount={handleEditorDidMount}
            defaultLanguage="javascript"
            height="80vh"
            defaultValue={task?.function_signature}
            theme={"vs-dark"}
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              height: "auto",
              padding: "0 0 0 0",
              gap: "4.8rem",
            }}
          >
            {!testLoading ? (
              <TestCases>
                <TestCaseTitle>
                  Test Cases{" "}
                  <span>
                    {correct < 0 ? "" : `${correct}/`}
                    {results?.length}
                  </span>
                </TestCaseTitle>
                {results?.map((testCase: any, i: number) => {
                  return (
                    <TestCase key={i}>
                      Test Case{" "}
                      {testCase.score === undefined ? (
                        <span>O</span>
                      ) : testCase.score ? (
                        <Check />
                      ) : (
                        <Close />
                      )}
                    </TestCase>
                  );
                })}
              </TestCases>
            ) : (
              <Loader />
            )}
            <SubmitCode onClick={showValue}>Submit</SubmitCode>
          </div>
        </div>
      ) : (
        <div>
          <Loader />
          <L
        </div>
      )}
    </GameMain>
  );
};

export default GameComponent;
