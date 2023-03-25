import styled from "styled-components";

export const PlayMain = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 1300px;
  justify-items: center;
`;

export const GameMode = styled.div`
  background-color: var(--gray3);
  padding: 4.8rem;
  border-radius: var(--border-radius-large);
`;
export const GameTitle = styled.h3`
  color: var(--text-0);
  font-size: 3.6rem;
  font-weight: 400;
  margin-bottom: 3rem;
`;
export const GameDescription = styled.p`
  color: var(--text-1);
  font-size: 2.4rem;
  text-align: center;
  margin-bottom: 2.4rem;
`;
export const GameText = styled.p`
  font-size: 3rem;
  padding: 1.2rem 2.4rem;
  background-color: var(--brand10);
  text-align: center;
  color: var(--brand1);
  transition: all 0.2s;
  border-radius: var(--border-radius);
  &:hover {
    background-color: var(--brand9);
  }
`;
