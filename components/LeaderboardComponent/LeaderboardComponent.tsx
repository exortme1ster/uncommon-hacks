import { User, users, usersSBS, usersSBW } from "@/functionality/data";
import React, { FC, useEffect, useState } from "react";

import {
  LeaderboardGrid,
  LeaderboardTitleSection,
  LeaderboardMainSection,
  LeaderboardColumn,
  LeaderboardRow,
  Sorter,
} from "./leaderboard.styles";

interface LeaderboardComponentInterface {
  isGlobal: boolean;
}

const LeaderboardComponent: FC<LeaderboardComponentInterface> = ({
  isGlobal,
}) => {
  // const [allUsers, changeAllUsers] = useState(usersSBS);
  const [sortByWins, changeSortByWins] = useState(false);

  // useEffect(() => {
  //   changeAllUsers(() => {
  //     if (sortByWins) {
  //       return usersSBW;
  //     } else {
  //       return usersSBS;
  //     }
  //   });
  // }, []);

  return (
    <LeaderboardGrid>
      <Sorter
        onClick={() => {
          console.log("CHANGE");
          changeSortByWins((prevState: boolean) => !prevState);
        }}
      >
        Sort by {sortByWins ? "score" : "wins"}
      </Sorter>
      <LeaderboardTitleSection>
        <LeaderboardColumn>User</LeaderboardColumn>
        <LeaderboardColumn>wins</LeaderboardColumn>
        <LeaderboardColumn>score</LeaderboardColumn>
      </LeaderboardTitleSection>
      <LeaderboardMainSection>
        {usersSBW.map((user: User, i: number) => {
          return (
            <LeaderboardRow key={i}>
              <LeaderboardColumn>{user.user_id}</LeaderboardColumn>
              <LeaderboardColumn>{user.wins}</LeaderboardColumn>
              <LeaderboardColumn>{user.avg_score}</LeaderboardColumn>
            </LeaderboardRow>
          );
        })}
      </LeaderboardMainSection>
    </LeaderboardGrid>
  );
};

export default LeaderboardComponent;
