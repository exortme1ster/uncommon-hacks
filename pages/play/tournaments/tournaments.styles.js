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
