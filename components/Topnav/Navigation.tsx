import { NavBar, HomePage, Navigation, LinkItem, LinkText } from "./Nav.styles";
import Link from "next/link";
import { FC, useState, useEffect } from "react";
import { page } from "@/functionality/data";

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
  return (
    <Navigation
      navigationState={navigationState}
      isMobile={isMobile && isNavBar}
      isNavBar={isNavBar}
    >
      {page.map((link: string, i: number) => {
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
