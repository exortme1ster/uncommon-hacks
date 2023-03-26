import {
  dummyUsers,
  User,
  users,
  usersSBS,
  usersSBW,
} from "@/functionality/data";
import React, { FC, useEffect, useState } from "react";

import { useSelector } from "react-redux";

import {
  LeaderboardGrid,
  LeaderboardTitleSection,
  LeaderboardMainSection,
  LeaderboardColumn,
  LeaderboardRow,
  Sorter,
} from "./leaderboard.styles";
import { getAllUsers } from "@/functionality/helpers";
import { Loader } from "../Loader/Loader";

interface LeaderboardComponentInterface {
  isGlobal: boolean;
  users: any;
}

const LeaderboardComponent: FC<LeaderboardComponentInterface> = ({
  isGlobal,
  users,
}) => {
  const [allUsers, changeAllUsers] = useState<User[]>([]);
  const [sortByWins, changeSortByWins] = useState(false);
  const [loading, setLoading] = useState(false);

  const { isAuth } = useSelector((state: any) => state.userReducer);

  useEffect(() => {
    if (allUsers.length !== 0) return;

    console.log(allUsers);

    setLoading(true);
    getAllUsers().then((response) => {
      changeAllUsers(response as User[]);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    console.log("hey");
    changeAllUsers((prevUsers: User[]) => {
      const newUsers = prevUsers.filter((user: User, i: number) => {
        // console.log(newUsers);
        return users.includes(user.user_id);
      });

      return newUsers;
    });
  }, [allUsers]);

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
        {loading ? (
          <Loader />
        ) : (
          allUsers.map((user: User, i: number) => {
            return (
              <LeaderboardRow key={i}>
                <LeaderboardColumn>{user.user_id}</LeaderboardColumn>
                <LeaderboardColumn>{user.wins}</LeaderboardColumn>
                <LeaderboardColumn>{user.avg_score}</LeaderboardColumn>
              </LeaderboardRow>
            );
          })
        )}
      </LeaderboardMainSection>
    </LeaderboardGrid>
  );
};

export default LeaderboardComponent;
