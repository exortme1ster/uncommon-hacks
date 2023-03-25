import LeaderboardComponent from "@/components/LeaderboardComponent/LeaderboardComponent";
import React, { FC } from "react";

import {
  LeaderboardMain,
  LeaderboardDesc,
  LeaderboardTitle,
  LeaderboardTitleDiv,
} from "./leaderboard.styles";

const Leaderboard = () => {
  return (
    <LeaderboardMain>
      <LeaderboardTitleDiv>
        <LeaderboardTitle>Leaderboard</LeaderboardTitle>
        <LeaderboardDesc>
          Hello, these are the best average scores out of any player
        </LeaderboardDesc>
      </LeaderboardTitleDiv>
      <LeaderboardComponent isGlobal={true} />
    </LeaderboardMain>
  );
};

export default Leaderboard;
