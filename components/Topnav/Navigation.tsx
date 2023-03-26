import {
  NavBar,
  HomePage,
  Navigation,
  LinkItem,
  LinkText,
  Logout,
} from "./Nav.styles";
import Link from "next/link";
import { FC, useState, useEffect } from "react";
import { page, loggedPages } from "@/functionality/data";
import { useSelector, useDispatch } from "react-redux";
import { authUserLogout } from "@/functionality/store/UserAuth";
import { useRouter } from "next/router";
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
  const { isAuth } = useSelector((state: any) => state.userReducer);
  const router = useRouter();

  return (
    <Navigation
      // @ts-ignore
      navigationState={navigationState}
      isMobile={isMobile && isNavBar}
      isNavBar={isNavBar}
    >
      {isAuth ? (
        <>
          <Logout
            onClick={() => {
              router.push("/");
              dispatch(authUserLogout());
            }}
          >
            Logout
          </Logout>
          {loggedPages.map((link: string, i: number) => {
            return (
              <>
                <LinkItem
                  isOn={
                    link.toLocaleLowerCase() ===
                    router.pathname.slice(1, router.pathname.length)
                  }
                  key={i}
                >
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
        </>
      ) : (
        page.map((link: string, i: number) => {
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
      )}
    </Navigation>
  );
};

export default NavigationComponent;
