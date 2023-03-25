import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { title } from "@/functionality/data";
import {
  HomeTitle,
  HomeTitleDiv,
  HomeTitleDesc,
  HomePage,
  LoginDiv,
  LinkText,
} from "./home.styles";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <HomePage>
        <HomeTitleDiv>
          <HomeTitle>{title}</HomeTitle>
          <HomeTitleDesc>
            Welcome to Hack Duels, the app that allows you to sharpen your
            coding skills by competing against other talented coders in
            real-time! With our app, you can tackle a variety of challenging
            LeetCode problems and see how your solutions stack up against other
            players. Whether you're a seasoned coder looking to improve your
            skills or a beginner just starting out, Hack Duels is the perfect
            place for you to learn and grow. Our app offers a fun, competitive
            environment that will push you to improve your coding abilities and
            help you reach your full potential. Join our community of
            like-minded individuals and challenge yourself to become a better
            coder today. With Hack Duels, the possibilities are endless!
          </HomeTitleDesc>
        </HomeTitleDiv>
        <LoginDiv>
          <Link href="/login">
            <LinkText>Login</LinkText>
          </Link>
        </LoginDiv>
      </HomePage>
    </>
  );
}
