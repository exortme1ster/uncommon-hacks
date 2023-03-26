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
import { Check } from "@/assets/Check";
import { Close } from "@/assets/Close";
import { generateTask } from "@/functionality/helpers";
import { Loader } from "../Loader/Loader";

const allTestCases = [
  { score: true },
  { score: false },
  { score: true },
  { score: false },
];

interface GameComponentInterface {
  tournamentid: string;
}

const GameComponent: FC<GameComponentInterface> = ({ tournamentid }) => {
  const editorRef = useRef(null);
  const monaco = useMonaco();

  const [moveBackground, setMoveBackground] = useState(0);

  const [loading, setLoading] = useState(false);

  const [task, currentTask] = useState<any>();

  useEffect(() => {
    setLoading(true);
    generateTask().then((response: any) => {
      currentTask(response);
      console.log(response);
      setLoading(false);
    });
  }, []);

  function handleEditorDidMount(editor: any, monaco: any) {
    editorRef.current = editor;
  }

  function showValue() {
    // @ts-ignore
    if (editorRef.current !== null) alert(editorRef.current.getValue());
  }

  useEffect(() => {
    // do conditional chaining
    monaco?.languages.typescript.javascriptDefaults.setEagerModelSync(true);
    // or make sure that it exists by other ways
    if (monaco) {
      console.log("here is the monaco instance:", monaco);
    }
  }, [monaco]);

  const correct = allTestCases
    .map((score: any, i: number) => {
      if (score.score) {
        return 1;
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
        <ShowGameTitle>Hello, lol</ShowGameTitle>
        <ShowGameDescription>
          ChatGPT {loading ? "is generating" : "generated"} a coding question
          for you ;)
        </ShowGameDescription>
        {!loading ? <ShowGameCode>{task?.task}</ShowGameCode> : <></>}
      </ShowGame>
      <Mover>
        {/* <Handle>
          <span
            onClick={() => {
              if (moveBackground <= -0.7) return;
              setMoveBackground((prevState: number) => prevState - 0.1);
            }}
          >
            (
          </span>
          &nbsp;&nbsp;
          <span
            onClick={() => {
              // if (moveBackground > .3) return;
              if (moveBackground >= 1.5) return;
              setMoveBackground((prevState: number) => prevState + 0.1);
            }}
          >
            )
          </span>
        </Handle> */}
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
            <TestCases>
              <TestCaseTitle>
                Test Cases {correct}/{task?.test_cases?.length}
              </TestCaseTitle>
              {task?.test_cases?.map((testCase: any, i: number) => {
                return (
                  <TestCase>
                    Test Case {i + 1} {testCase.score ? <Check /> : <Close />}
                  </TestCase>
                );
              })}
            </TestCases>
            <SubmitCode onClick={showValue}>Submit</SubmitCode>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </GameMain>
  );
};

export default GameComponent;
