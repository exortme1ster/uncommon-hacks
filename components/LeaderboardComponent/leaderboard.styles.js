import styled from "styled-components";

export const LeaderboardGrid = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
export const LeaderboardTitleSection = styled.div`
  background-color: var(--gray5);
  display: flex;
  justify-content: space-around;
  color: var(--text-1);
  p {
    font-size: 2.4rem;
  }
`;
export const LeaderboardMainSection = styled.div`
  background-color: var(--gray3);
  //   display: grid;
  //   grid-template-columns: 1fr;
  border-bottom: 2px solid var(--border);
  align-items: center;
  justify-items: center;
`;

export const LeaderboardColumn = styled.p`
  color: var(--text-1);
  padding: 2.4rem 0;
  font-size: 1.6rem;
`;
export const LeaderboardRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  align-items: center;
  justify-items: center;
`;

export const Sorter = styled.button`
  border-radius: var(--border-radius-large);
  color: var(--brand1);
  background-color: var(--brand10);
  position: absolute;
  padding: 0.6rem 2.4rem;
  font-size: 1.6rem;
  cursor: pointer;
  transition: all 0.2s;
  right: 0%;
  top: 0%;
  transform: translateY(-100%);
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border: none;
  &:hover {
    background-color: var(--brand9);
  }
`;
