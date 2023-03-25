import styled from "styled-components";

export const HomeTitle = styled.h1`
  text-align: center;
  width: 100%;
  display: block;
  margin-bottom: 2.4rem;
  font-size: 7.4rem;
  color: var(--text-0);
  padding-top: 6.4rem;
  font-weight: 400;
`;

export const HomeTitleDiv = styled.div``;

export const HomeTitleDesc = styled.p`
  line-height: 1.5;
  font-size: 2.4rem;
  color: var(--text-1);
  text-align: center;
  margin-bottom: 2.4rem;
`;

export const HomePage = styled.main`
  min-height: 100vh;
  max-width: 130rem;
  margin: 0 auto;
`;

export const LoginDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const LinkText = styled.p`
  padding: 1.2rem 2.4rem;
  background-color: var(--brand10);
  border-radius: 0.25rem;
  display: block;
  font-size: 3rem;
  color: var(--brand1);
  transition: all 0.2s;
  &:hover {
    background-color: var(--brand9);
  }
`;
