import { title } from "@/functionality/data";
import { FC, useState, useEffect } from "react";
import Link from "next/link";
import { NavBar, HomePage, Navigation, LinkItem, LinkText } from "./Nav.styles";
import NavigationComponent from "./Navigation";

const Nav = () => {
  const [isMobile, changeMobile] = useState(false);
  const [navigationState, openNavigation] = useState(false);

  useEffect(() => {
    let q1 = window.matchMedia("(max-width: 54em)");
    changeMobile(q1.matches);

    q1.onchange = () => {
      changeMobile(q1.matches);
      openNavigation(false);
    };
  });

  return (
    <NavBar>
      <HomePage>
        <Link href="/">
          <LinkText>{title}</LinkText>
        </Link>
      </HomePage>
      {isMobile && (
        <button
          onClick={() => {
            openNavigation((prevState: boolean) => !prevState);
          }}
        >
          Open Navigation
        </button>
      )}

      <NavigationComponent
        navigationState={!isMobile ? true : navigationState}
        openNavigation={openNavigation}
        isNavBar={true}
        isMobile={isMobile}
      />
    </NavBar>
  );
};

export default Nav;
