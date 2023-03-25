import React, { FC } from "react";
import {
  TournamentsMain,
  SidebarTournaments,
  ShowTournaments,
  TournamentName,
} from "./tournaments.styles";

const tournamentTypes = ["All", "Current", "Recent"];
const tournaments = [
  {
    status: "going",
  },
  {
    status: "going",
  },
  {
    status: "going",
  },
  {
    status: "end",
  },
  {
    status: "end",
  },
  {
    status: "end",
  },
];
const Tournament = () => {
  return (
    <TournamentsMain>
      <SidebarTournaments>
        {tournamentTypes.map((tournamentName: string, i: number) => (
          <TournamentName key={i}>{tournamentName}</TournamentName>
        ))}
      </SidebarTournaments>
      <ShowTournaments></ShowTournaments>
    </TournamentsMain>
  );
};

export default Tournament;
