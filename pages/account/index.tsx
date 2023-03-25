import { users } from "@/functionality/data";
import React, { FC } from "react";

import {
  AccountMain,
  AccountBox,
  AccountInfo,
  AccountTitle,
} from "./account.styles";

const Account = () => {
  return (
    <AccountMain>
      <AccountBox>
        <AccountTitle>Hello, {users[0].user_id}</AccountTitle>
        <AccountInfo>
          Created:&nbsp; &nbsp; &nbsp; &nbsp;
          <span>
            {users[0].created_at.toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>
        </AccountInfo>
        <AccountInfo>
          Wins:{" "}
          <span style={{ textAlign: "end", display: "inline-block" }}>
            {users[0].wins}
          </span>
        </AccountInfo>
        <AccountInfo>
          Average score:
          <span>{users[0].avg_score.toFixed(2)}</span>
        </AccountInfo>
      </AccountBox>
    </AccountMain>
  );
};

export default Account;
