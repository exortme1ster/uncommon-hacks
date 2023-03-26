import { NavBar, HomePage, Navigation, LinkItem, LinkText } from "./Nav.styles";
import Link from "next/link";
import { FC, useState, useEffect } from "react";
import { page, loggedPages } from "@/functionality/data";
import { useSelector,useDispatch } from "react-redux";
import { authUserLogout } from "@/functionality/store/UserAuth";

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
  const dispatch = useDispatch();
  const {isAuth} = useSelector((state: any) => state.userReducer);

  console.log(isAuth)

  return (
    <Navigation
      // @ts-ignore
      navigationState={navigationState}
      isMobile={isMobile && isNavBar}
      isNavBar={isNavBar}
    >
      {isAuth
        ? 
        <>
            {   
                loggedPages.map((link: string, i: number) => {
                return (
                  <>
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
                  </>
                );
              })}
              {/* @ts-ignore */}
              <button onClick={() => dispatch(authUserLogout())}>
                  Logout
              </button>
        </>
        : page.map((link: string, i: number) => {
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
