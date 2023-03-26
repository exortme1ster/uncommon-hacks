import { NavBar, HomePage, Navigation, LinkItem, LinkText } from "./Nav.styles";
import Link from "next/link";
import { FC, useState, useEffect } from "react";
import { page, loggedPages } from "@/functionality/data";
import { useSelector } from "react-redux";

interface NavigationComponentI {
  isNavBar: boolean;
  isMobile: boolean;
  navigationState: boolean;
  openNavigation: any;
}

const NavigationComponent: FC<NavigationComponentI> = ({
  isNavBar,
  isMobile,
  navigationState,
  openNavigation,
}) => {
  const isAuth = useSelector((state: any) => state.userReducer);
  console.log(isAuth);

  return (
    <Navigation
      // @ts-ignore
      navigationState={navigationState}
      isMobile={isMobile && isNavBar}
      isNavBar={isNavBar}
    >
      {true && true !== null
        ? page.map((link: string, i: number) => {
            return (
              <LinkItem key={i}>
                <Link
                  href={"/" + link.toLocaleLowerCase()}
                  onClick={() => {
                    if (openNavigation !== undefined) openNavigation(false);
                  }}
                >
                  <LinkText>{link}</LinkText>
                </Link>
              </LinkItem>
            );
          })
        : loggedPages.map((link: string, i: number) => {
            return (
              <LinkItem key={i}>
                <Link
                  href={"/" + link.toLocaleLowerCase()}
                  onClick={() => {
                    if (openNavigation !== undefined) openNavigation(false);
                  }}
                >
                  <LinkText>{link}</LinkText>
                </Link>
              </LinkItem>
            );
          })}
    </Navigation>
  );
};

export default NavigationComponent;
