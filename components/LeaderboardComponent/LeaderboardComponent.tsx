import React, { FC } from "react";

// import { LeaderboardMain } from "./leaderboard.styles";

interface LeaderboardComponentInterface {
  isGlobal: boolean;
}

const userDummy = [
  {
    username: "",
    average_score: "",
  },
];

const LeaderboardComponent: FC<LeaderboardComponentInterface> = ({
  isGlobal,
}) => {
  return <div>d</div>;
};

export default LeaderboardComponent;
