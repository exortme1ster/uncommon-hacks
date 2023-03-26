import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import { supabase } from "@/functionality/supabase";

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
} from "./tournaments.styles";
import LeaderboardComponent from "@/components/LeaderboardComponent/LeaderboardComponent";
import Link from "next/link";
import { GameText } from "../play.styles";
import { getTournaments, addTournament } from "@/functionality/helpers";

export const tournamentTypes = ["all", "going", "ended", "current"];
// export const tournaments = [
//   {
//     name: "aosidjasdoij",
//     status: "going",
//     users: ["21231", "21231"],
//     id: "12312",
//   },
//   {
//     name: "aosidjasdoij",
//     status: "going",
//     users: ["21231", "21231", "21231"],
//     id: "1231111",
//   },
//   {
//     name: "aosidjasdoij",
//     status: "going",
//     users: ["21231", "21231", "21231"],
//     id: "11239109",
//   },
//   {
//     name: "aosidjasdoij",
//     status: "ended",
//     users: ["21231", "21231", "21231"],
//     id: "123819",
//   },
//   {
//     name: "aosidjasdoij",
//     status: "ended",
//     users: ["21231", "21231", "21231"],
//     id: "1223",
//   },
//   {
//     name: "aosidjasdoij",
//     status: "ended",
//     users: ["21231", "21231", "21231"],
//     id: "1123910912390",
//   },
// ];

const Tournament = () => {
  const [currentTournamentType, changeCurrentTournamentType] = useState(
    tournamentTypes[0]
  );

  const [createModal, openCreateModal] = useState(false);

  const [tournaments, setTournaments] = useState([])

  const { user } = useSelector((state: any) => state.userReducer);

  const [counter, setCounter] = useState(0)

  // @ts-ignore
  useEffect(() => {
    const data = supabase.channel('custom-all-channel')
    .on(
      'postgres_changes',
      { event: 'INSERT', schema: 'public', table: 'tournaments' },
      (payload) => {
        console.log(payload)
        let newArr = tournaments;
          // @ts-ignore
        newArr.push(payload.new);
        setTournaments(newArr)
        window.location.reload();
      }
    )
    .subscribe()
  }, [tournaments])

  // @ts-ignore
  useEffect(async () => {
    let data = await getTournaments()
     // @ts-ignore
    setTournaments(data)
  }, [])

  console.log(tournaments)

  const tournamentsVar = tournaments
    .map((tournament: any, i: number) => {
      return (
        <TournamentDiv key={i}>
          <TournamentsName>{tournament.name}</TournamentsName>
          <TournamentPlayers>
            {tournament.users.map((user: any, i: number) => (
              <PlayerName key={i}>{user}</PlayerName>
            ))}
          </TournamentPlayers>

          {/* @ts-ignore */}
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
        onSubmit={async (values, actions) => {
          await addTournament(values.name, user.id)
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
        <MyTournament>Welcome to {tournaments[0]?.name}</MyTournament>
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
          <Link href={`/play/tournaments/${tournaments[0]?.id}`}>
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
              openCreateModal((prevState: boolean) => !prevState);
            }}
            // @ts-ignore
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
