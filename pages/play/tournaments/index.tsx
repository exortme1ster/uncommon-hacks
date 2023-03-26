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
} from "./tournaments.styles";

const tournamentTypes = ["all", "going", "ended", "current"];
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
    status: "ended",
    users: ["21231", "21231", "21231"],
  },
  {
    name: "aosidjasdoij",
    status: "ended",
    users: ["21231", "21231", "21231"],
  },
  {
    name: "aosidjasdoij",
    status: "ended",
    users: ["21231", "21231", "21231"],
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
    color: "#F00",
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
          email: "",
          password: "",
        }}
        onSubmit={(values, actions) => {
          console.log(values.name);
          console.log(values.password);
          console.log(values.email);
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
          <LabelFieldContainer>
            <label htmlFor="password">password</label>
            <Field style={inputStyle} id="password" name="password" />
          </LabelFieldContainer>
          <LabelFieldContainer>
            <label htmlFor="email">email</label>
            <Field style={inputStyle} id="email" name="email" />
          </LabelFieldContainer>

          <FormButton type="submit">Submit</FormButton>
        </Form>
      </Formik>
    </CreateTournament>
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
        {createModal ? createTournament : tournamentsVar}
        <AddTournament
          onClick={() => {
            console.log(createModal);
            openCreateModal((prevState: boolean) => !prevState);
          }}
          isOn={createModal}
        >
          +
        </AddTournament>
      </ShowTournaments>
    </TournamentsMain>
  );
};

export default Tournament;
