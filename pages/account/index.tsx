import { Loader } from "@/components/Loader/Loader";
import { User, users, user } from "@/functionality/data";
import { getCurrentUser } from "@/functionality/helpers";
import React, { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { supabase } from "@/functionality/supabase";
import { useDispatch } from "react-redux";
import { authUserLogin } from "@/functionality/store/UserAuth";

import {
  AccountMain,
  AccountBox,
  AccountInfo,
  AccountTitle,
} from "./account.styles";

const Account = () => {
  const { user } = useSelector((state: any) => state.userReducer);

  const [userTable, setUserTable] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const [session, setSession] = useState(null);

  // console.log(user);

  useEffect(() => {
    if (user !== undefined) {
      console.log(user);
      setLoading(true);
      getCurrentUser(user.id).then((response: any) => {
        console.log(response);
        setUserTable(response as User);
        setLoading(false);
      });
    } else {
      console.log("user is undefined!");
    }
  }, [session]);

  return (
    <AccountMain>
      <AccountBox>
        {loading ? (
          <Loader />
        ) : userTable !== null && userTable !== undefined ? (
          <>
            <AccountTitle>Hello, {user.email}</AccountTitle>
            <AccountInfo>
              Created:&nbsp; &nbsp; &nbsp; &nbsp;
              <span>
                {new Date(user.created_at).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </AccountInfo>
            <AccountInfo>
              Wins:{" "}
              <span style={{ textAlign: "end", display: "inline-block" }}>
                {userTable.wins}
              </span>
            </AccountInfo>
            <AccountInfo>
              Average score:
              <span>{userTable.avg_score.toFixed(2)}</span>
            </AccountInfo>
          </>
        ) : (
          <AccountTitle>Log in!</AccountTitle>
        )}
      </AccountBox>
    </AccountMain>
  );
};

export default Account;
