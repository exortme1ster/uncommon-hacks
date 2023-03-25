import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { store } from "../functionality/store/Store";
import { Provider } from "react-redux";
import Head from "next/head";
import Nav from "@/components/Topnav/Nav";
import PopupToast from "@/components/PopupToast/PopupToast";
import Footer from "@/components/Footer/Footer";
import Background from "@/components/Background/Background";
import { use, useEffect, useState } from "react";
import { supabase } from "@/functionality/supabase";
import { useRouter } from 'next/router'
import { insertUser } from "@/functionality/helpers";

export default function App({ Component, pageProps }: AppProps) {
  const main = (
    // @ts-ignore
    <Background>
      <Component {...pageProps} />
      <PopupToast />
    </Background>
  );

  const [session, setSession] = useState(null)
  const router = useRouter()

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      // @ts-ignore
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      // @ts-ignore
      setSession(session)
    })
  }, [])

    // navigate to logout if session is null
    // useEffect(() => {
    //   if (session) {
    //     router.push('/platform')
    //   } else {
    //     insertUser();
    //     router.push('/')
    //   }
    // }, [session])

  return (
    <Provider store={store}>
      <Head>
        <title>Uncommon Hacks</title>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Pacifico&family=Varela+Round&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Nav />
      {main}
      <Footer />
    </Provider>
  );
}
