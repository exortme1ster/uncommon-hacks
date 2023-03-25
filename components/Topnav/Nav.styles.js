import styled from "styled-components";

export const NavBar = styled.nav`
  height: 8rem;
  display: flex;
  justify-content: space-between;
  padding: 1.2rem;
`;

export const HomePage = styled.div``;

export const Navigation = styled.ul`
  display: flex;
  list-style: none;
  gap: 2.4rem;
  flex-direction ${(props) =>
    props.isNavBar && !props.isMobile ? "row" : "column"};




  justify-content: ${(props) => (props.isMobile ? "center" : "auto")};
  align-items: ${(props) => (props.isMobile ? "center" : "auto")};

  position: ${(props) => (props.isMobile ? "absolute" : "relative")};
  width: ${(props) => (props.isMobile ? `100vw` : "auto")};
  height: ${(props) => (props.isMobile ? `100vh` : "auto")};
  background: ${(props) => (props.isMobile ? `rgba(0,0,0,0.5)` : "auto")};
  z-index: ${(props) => (props.isMobile ? `100` : "1")};

  opacity: ${(props) => (props.navigationState ? "1" : "0")};
  pointer-events: ${(props) => (props.navigationState ? "auto" : "none")};
  user-select: ${(props) => (props.navigationState ? "auto" : "none")};
 
  

`;

export const LinkItem = styled.li``;

export const LinkText = styled.span`
  display: inline-block;
  padding: 1.2rem 2.4rem;
  color: white;
  font-size: 2.4rem;
  background-color: orange;
`;
