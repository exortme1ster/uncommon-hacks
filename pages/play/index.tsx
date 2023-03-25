import Link from "next/link";
import React, { FC } from "react";
import {
  PlayMain,
  GameMode,
  GameDescription,
  GameText,
  GameTitle,
} from "./play.styles";

const modes = [
  {
    title: "Single Player",
    description: "Practice!",
    buttonDesc: "Play!",
    link: "game",
  },
  {
    title: "Tournaments",
    description: "Code against other people!",
    buttonDesc: "Play!",
    link: "tournaments",
  },
];

const Play = () => {
  return (
    <PlayMain>
      {modes.map((mode: any, i: number) => {
        return (
          <GameMode>
            <GameTitle>{mode.title}</GameTitle>
            <GameDescription>{mode.description}</GameDescription>
            <Link href={`play/${mode.link}`}>
              <GameText>{mode.buttonDesc}</GameText>
            </Link>
          </GameMode>
        );
      })}
    </PlayMain>
  );
};

export default Play;
