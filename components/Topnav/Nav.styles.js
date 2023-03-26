import styled from "styled-components";

export const NavBar = styled.nav`
  height: 8rem;
  display: flex;
  justify-content: space-between;
  padding: 1.2rem;
  background-color: var(--primary);
  align-items: center;
  border-bottom: 2px solid var(--border);
`;

export const Logout = styled.button`
  background-color: var(--brand8);

  color: var(--brand2);
  padding: 0.6rem 2.4rem;
  height: 35px;
  border: none;
  font-size: 2rem;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background-color: var(--brand10);
  }
  align-self: center;
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
 
  span {
    font-size: 2.4rem;
    height: 120%;
    transition: all .2s;
  }

  span:hover {
    box-shadow: inset 0 -2px  var(--brand8);
    color:  var(--brand8);
  }
  

`;

export const LinkItem = styled.li``;

export const LinkText = styled.span`
  display: inline-block;
  padding: 1.2rem 2.4rem;
  color: var(--text-0);
  font-size: 3.6rem;
  :
`;
