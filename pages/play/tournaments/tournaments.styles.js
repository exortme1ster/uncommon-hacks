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
  color: ${(props) =>
    props.currentTournamentType ? "var(--brand8)" : "var(--text-1)"};
  &:hover {
    background-color: var(--gray4);
  }
  transition: all 0.2s;

  box-shadow: ${(props) =>
    props.currentTournamentType ? "inset -2px 0 var(--brand8)" : "none"};
`;

export const TournamentDiv = styled.div`
  padding: 3.2rem 6.4rem 6.4rem 6.4rem;

  border-radius: var(--border-radius-large);
  background-color: var(--gray4);
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

export const TournamentStatus = styled.p`
  position: absolute;
  right: 1%;
  top: 8%;
  padding: 1.2rem;
  font-size: 1.2rem;
  border-radius: var(--border-radius);
  color: var(--brand2);

  background-color: ${(props) =>
    props.current ? "var(--brand8)" : "var(--failure)"};
`;

export const TournamentJoin = styled.button`
  position: absolute;
  right: 1%;
  bottom: 5%;
  padding: 1.2rem 2.4rem;
  background-color: transparent;
  border: none;
  box-shadow: inset 0px 0px 0px 2px var(--brand8);
  border-radius: var(--border-radius);
  color: var(--brand8);
  cursor: pointer;
  transition: all 0.2s;
  span {
    opacity: 0;
    position: absolute;
    transition: all 0.2s;
  }
  &:hover {
    span {
      opacity: 1;
    }
  }
`;

export const AddTournament = styled.button`
  position: fixed;
  right: 2%;
  bottom: 2%;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;

  width: 25px;
  height: 25px;
  color: ${(props) => (props.isOn ? "var(--brand6)" : "var(--brand8)")};
  font-size: 6.4rem;
  border: ${(props) =>
    props.isOn ? "2px solid var(--brand6)" : "2px solid var(--brand8)"};
  padding: 3.2rem;
  border-radius: 50%;
  transition: all 0.2s;
  transform: ${(props) => (props.isOn ? " rotate(-135deg)" : " rotate(0deg)")};
  &:hover {
    transform: rotate(-180deg);
  }
`;

export const CreateTournament = styled.div`
  background-color: var(--gray4);

  width: 100%;

  border-radius: var(--border-radius-large);
`;

export const CreateTournamentTitle = styled.h2`
  font-size: 4.8rem;
  color: var(--text-1);
  font-weight: 400;
  text-align: center;
  padding: 1.2rem 0;
`;

export const LabelFieldContainer = styled.div`
  display: flex;
  font-size: 2.4rem;
  gap: 2.4rem;
  color: var(--text-2);
`;
export const FormButton = styled.button`
  width: 50%;
`;
