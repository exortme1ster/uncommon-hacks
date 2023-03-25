import { User } from "@/functionality/data";
import React, { FC, useState } from "react";
import {
  TournamentsMain,
  SidebarTournaments,
  ShowTournaments,
  TournamentName,
  TournamentDiv,
  TournamentPlayers,
  TournamentsName,
  PlayerName,
  TournamentStatus,
} from "./tournaments.styles";

const tournamentTypes = ["All", "Current", "Recent"];
const tournaments = [
  {
    name: "aosidjasdoij",
    status: "going",
    users: ["21231", "21231"],
  },
  {
    name: "aosidjasdoij",
    status: "going",
    users: ["21231", "21231", "21231"],
  },
  {
    name: "aosidjasdoij",
    status: "going",
    users: ["21231", "21231", "21231"],
  },
  {
    name: "aosidjasdoij",
    status: "end",
    users: ["21231", "21231", "21231"],
  },
  {
    name: "aosidjasdoij",
    status: "end",
    users: ["21231", "21231", "21231"],
  },
  {
    name: "aosidjasdoij",
    status: "end",
    users: ["21231", "21231", "21231"],
  },
];
const Tournament = () => {
  const [currentTournamentType, changeCurrentTournamentType] = useState(
    tournamentTypes[0]
  );

  return (
    <TournamentsMain>
      <SidebarTournaments>
        {tournamentTypes.map((tournamentName: string, i: number) => (
          <TournamentName key={i}>{tournamentName}</TournamentName>
        ))}
      </SidebarTournaments>
      <ShowTournaments>
        {tournaments.map((tournament: any, i: number) => {
          return (
            <TournamentDiv key={i}>
              <TournamentsName>{tournament.name}</TournamentsName>
              <TournamentPlayers>
                {tournament.users.map((user: any, i: number) => (
                  <PlayerName key={i}>{user}</PlayerName>
                ))}
              </TournamentPlayers>

              <TournamentStatus tStatus={tournament.status}>
                {tournament.status}
              </TournamentStatus>
            </TournamentDiv>
          );
        })}
      </ShowTournaments>
    </TournamentsMain>
  );
};

export default Tournament;
