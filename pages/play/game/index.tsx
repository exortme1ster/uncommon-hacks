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
} from "./game.styles";
import Editor, { useMonaco } from "@monaco-editor/react";
import { users } from "@/functionality/data";
import { Check } from "@/assets/Check";
import { Close } from "@/assets/Close";

const allTestCases = [
  { score: true },
  { score: false },
  { score: true },
  { score: false },
];

const Game = () => {
  const editorRef = useRef(null);
  const monaco = useMonaco();

  const [moveBackground, setMoveBackground] = useState(0);

  console.log(moveBackground);

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
          ChatGPT generated a coding question for you ;)
        </ShowGameDescription>
        <ShowGameCode>asdsoij</ShowGameCode>
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
      <div>
        <Editor
          onMount={handleEditorDidMount}
          defaultLanguage="javascript"
          height="80vh"
          defaultValue="// some comment"
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
              Test Cases {correct}/{allTestCases.length}
            </TestCaseTitle>
            {allTestCases.map((testCase: any, i: number) => {
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
    </GameMain>
  );
};

export default Game;
