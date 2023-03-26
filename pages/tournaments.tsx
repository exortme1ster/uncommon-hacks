import React, { useEffect, useState } from "react";
import { Container } from "@/styles/Platform.styles";
import { generateTournamentTasks } from "../functionality/helpers";
import { Triangle } from "react-loader-spinner";

export default function Tournaments() {
  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState([]);

  //@ts-ignore
  useEffect(async () => {
    setLoading(true);
    const tasks = await generateTournamentTasks();
    // @ts-ignore
    setTasks(tasks);
    console.log(tasks);
    setLoading(false);
  }, []);

  console.log(process.env.DB_USER);

  return (
    <Container>
      {loading ? (
        <>
          <Triangle
            height="160"
            width="160"
            color="#4fa94d"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            //@ts-ignore
            wrapperClassName=""
            visible={true}
          />
          <h1 style={{ color: "white", marginTop: "20px" }}>
            Generating tournament!
          </h1>
        </>
      ) : (
        <div>
          {/* //@ts-ignore */}
          <h1 style={{ color: "white", marginTop: "20px" }}>
            {tasks[0]?.task}
          </h1>
          {/* @ts-ignore */}
          <h2 style={{ color: "white", marginTop: "20px" }}>
            {tasks[0]?.function_signature}
          </h2>
        </div>
      )}
    </Container>
  );
}
