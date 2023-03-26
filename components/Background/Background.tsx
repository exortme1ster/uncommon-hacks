import { BackgroundSection } from "./Background.style";
import React, { useState, useEffect } from "react";
import { supabase } from "@/functionality/supabase";
import { useDispatch } from "react-redux";
import { authUserLogin } from "@/functionality/store/UserAuth";

// @ts-ignore
const Background = (props) => {
  // @ts-ignore

  const dispatch = useDispatch();
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      console.log(session);
      if (session !== null) {
        // @ts-ignore
        setSession(session);
        dispatch(authUserLogin(session.user));
      }
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      // @ts-ignore
      setSession(session);
      dispatch(authUserLogin(session?.user));
    });
  }, []);

  return <BackgroundSection>{props.children}</BackgroundSection>;
};
export default Background;
