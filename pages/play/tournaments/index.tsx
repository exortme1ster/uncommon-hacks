import { User } from "@/functionality/data";
import { current } from "@reduxjs/toolkit";
import { create } from "domain";
import React, { FC, useState } from "react";
import { Formik, Form, Field } from "formik";

import {
  CreateTournament,
  TournamentsMain,
  SidebarTournaments,
  ShowTournaments,
  TournamentName,
  TournamentDiv,
  TournamentPlayers,
  TournamentsName,
  PlayerName,
  TournamentStatus,
  TournamentJoin,
  AddTournament,
  CreateTournamentTitle,
  LabelFieldContainer,
  FormButton,
  IndividualTournament,
  TournamentsDescription,
  MyTournament,
  PlayButtonDiv,
  Play,
} from "./tournaments.styles";
import LeaderboardComponent from "@/components/LeaderboardComponent/LeaderboardComponent";
import Link from "next/link";
import { GameText } from "../play.styles";

export const tournamentTypes = ["all", "going", "ended", "current"];
export const tournaments = [
  {
    name: "aosidjasdoij",
    status: "going",
    users: ["21231", "21231"],
    id: "12312",
  },
  {
    name: "aosidjasdoij",
    status: "going",
    users: ["21231", "21231", "21231"],
    id: "1231111",
  },
  {
    name: "aosidjasdoij",
    status: "going",
    users: ["21231", "21231", "21231"],
    id: "11239109",
  },
  {
    name: "aosidjasdoij",
    status: "ended",
    users: ["21231", "21231", "21231"],
    id: "123819",
  },
  {
    name: "aosidjasdoij",
    status: "ended",
    users: ["21231", "21231", "21231"],
    id: "1223",
  },
  {
    name: "aosidjasdoij",
    status: "ended",
    users: ["21231", "21231", "21231"],
    id: "1123910912390",
  },
];
const Tournament = () => {
  const [currentTournamentType, changeCurrentTournamentType] = useState(
    tournamentTypes[0]
  );

  const [createModal, openCreateModal] = useState(false);

  const tournamentsVar = tournaments
    .filter((tournament: any, i: number) => {
      if (currentTournamentType === "all") {
        return true;
      }
      // CURRENT
      // if user.currentTournament === tournament.id
      // return true

      return tournament.status === currentTournamentType;
    })
    .map((tournament: any, i: number) => {
      return (
        <TournamentDiv key={i}>
          <TournamentsName>{tournament.name}</TournamentsName>
          <TournamentPlayers>
            {tournament.users.map((user: any, i: number) => (
              <PlayerName key={i}>{user}</PlayerName>
            ))}
          </TournamentPlayers>

          <TournamentStatus current={tournament.status === "going"}>
            {tournament.status}
          </TournamentStatus>
          {tournament.status === "going" ? (
            <TournamentJoin>
              Join&nbsp;&nbsp;<span>&rarr;</span>
            </TournamentJoin>
          ) : (
            <></>
          )}
        </TournamentDiv>
      );
    });

  const inputStyle = {
    color: "#6a6a6a",
    padding: "8px 4px",
    background: "#232323",
    width: `98%`,
    transition: "all .2s",
    border: "1px solid #282828",
    borderRadius: ".75rem",
  };

  const createTournament = (
    <CreateTournament>
      <CreateTournamentTitle>Create Tournament</CreateTournamentTitle>
      <Formik
        initialValues={{
          name: "",
        }}
        onSubmit={(values, actions) => {
          console.log(values.name);
        }}
      >
        <Form
          style={{
            marginTop: "8px",
            backgroundColor: "#1c1c1c",
            padding: `2.4rem`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          id="saveForm"
        >
          <LabelFieldContainer>
            <label htmlFor="name">name</label>
            <Field style={inputStyle} id="name" name="name" />
          </LabelFieldContainer>

          <FormButton type="submit">Submit</FormButton>
        </Form>
      </Formik>
    </CreateTournament>
  );

  const current = (
    <ShowTournaments>
      <IndividualTournament>
        <MyTournament>Welcome to {tournaments[0].name}</MyTournament>
        <TournamentsDescription>
          Welcome to the ultimate showdown of keystrokes and syntax! In this
          tournament, you'll face off against the greatest minds in coding,
          armed with nothing but your trusty keyboard and caffeine-fueled
          determination.
        </TournamentsDescription>
        <TournamentsDescription>
          Will you rise to the challenge and emerge victorious, or will you be
          left in the dust of your rivals' finely tuned code?
        </TournamentsDescription>
        <PlayButtonDiv>
          <Link href={`/play/tournaments/${tournaments[0].id}`}>
            <GameText>Play</GameText>
          </Link>
        </PlayButtonDiv>
        <LeaderboardComponent isGlobal={false} />
      </IndividualTournament>
    </ShowTournaments>
  );

  return (
    <TournamentsMain>
      <SidebarTournaments>
        {tournamentTypes.map((tournamentName: string, i: number) => (
          <TournamentName
            onClick={(e: any) => {
              changeCurrentTournamentType(e.target.innerHTML);
            }}
            key={i}
            // @ts-ignore
            currentTournamentType={currentTournamentType === tournamentName}
          >
            {tournamentName}
          </TournamentName>
        ))}
      </SidebarTournaments>
      <ShowTournaments>
        {currentTournamentType === "current" ? current : <></>}
        {createModal ? createTournament : tournamentsVar}
        {currentTournamentType === "current" ? (
          <></>
        ) : (
          <AddTournament
            onClick={() => {
              console.log(createModal);
              openCreateModal((prevState: boolean) => !prevState);
            }}
            isOn={createModal}
          >
            +
          </AddTournament>
        )}
      </ShowTournaments>
    </TournamentsMain>
  );
};

export default Tournament;
