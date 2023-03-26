import React, { FC, useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import GameComponent from "@/components/GameComponent/GameComponent";

const TournamentID = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {}, [router]);

  return (
    <GameComponent
      tournament={""}
      tournamentid={router.query.tournamentid as string}
    />
  );
};

export default TournamentID;
