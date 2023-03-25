import styled from "styled-components";

export const TournamentsMain = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 0.1fr 1fr;
  justify-content: center;
  align-items: center;
  // justify-items: center;
`;

export const SidebarTournaments = styled.aside`
  background-color: var(--gray3);
  width: 100%;
  height: 100%;
  border-right: 2px solid var(--border);
`;
export const ShowTournaments = styled.div`
  margin: 0 auto;
  max-width: 1300px;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 4.2rem;
`;

export const TournamentName = styled.button`
  display: block;
  width: 100%;
  background: none;
  cursor: pointer;
  font-size: 2rem;
  text-align: center;
  padding: 0.6rem 0;
  border: none;
  border-bottom: 2px solid var(--gray5);
  color: var(--text-1);
  &:hover {
    background-color: var(--gray4);
  }
`;

export const TournamentDiv = styled.div`
  padding: 3.2rem 6.4rem 6.4rem 6.4rem;

  border-radius: var(--border-radius-large);
  background-color: var(--gray5);
  position: relative;
`;
export const TournamentsName = styled.h3`
  font-size: 4rem;
  font-weight: 400;
  color: var(--text-0);
  padding: 0;
`;
export const TournamentPlayers = styled.div`
  display: flex;
  gap: 2.4rem;
  justify-content: center;
`;
export const PlayerName = styled.p`
  color: var(--text-1);
  font-size: 2.4rem;
`;

export const TournamentStatus = styled.span<{tStatus?: boolean}>`
  position: absolute;
  right: 2%;
  top: 2%;
  padding: 1.2rem;
  background-color: ${(props) =>
    props.tStatus ? "var(--success)" : "var(--failure)"};
`;
