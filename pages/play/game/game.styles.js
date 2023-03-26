import styled from "styled-components";

export const GameMain = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 2px 1fr;
  margin: 0 auto;
  max-width: 1500px;
  background-color: var(--gray2);
`;

export const ShowGame = styled.div`
  // text-align: center;
  padding: 4.8rem 3.2rem 3.2rem 3.2rem;
`;
export const ShowGameTitle = styled.h2`
  color: var(--text-1);
  font-size: 6.4rem;
  font-weight: 400;
`;
export const ShowGameDescription = styled.p`
  color: var(--text-1);
  font-size: 3.2rem;
`;

export const ShowGameCode = styled.code`
  background-color: var(--gray3);
  padding: 2.4rem;
  display: inline-block;
  margin: 2.4rem 0;
  color: var(--gray11);
  font-size: 2rem;
  border-radius: var(--border-radius);
  line-height: 1.5;
`;

export const Mover = styled.div`
  background-color: var(--gray4);
  position: relative;
`;

export const Handle = styled.div`
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  border: 2px solid var(--border);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 10000;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--brand8);
  font-size: 2.4rem;
  span {
    &:hover {
      color: var(--brand5);
    }
  }
`;

export const SubmitCode = styled.button`
  background-color: var(--brand8);
  padding: 1.2rem 2.4rem;
  cursor: pointer;
  color: var(--brand2);
  border: none;
  border-radius: var(--border-radius);
  &:hover {
    background-color: var(--brand9);
  }
  font-size: 2.4rem;
  font-weight: 400;
`;

export const TestCases = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  height: 20rem;
`;

export const TestCaseTitle = styled.h4`
  font-size: 2.4rem;
  color: var(--text-1);
  font-weight: 400;
  padding: 1.2rem 1.2rem;
  border-bottom: 2px solid var(--border);
`;

export const TestCase = styled.p`
  color: var(--text-2);
  font-size: 2rem;
  padding: 1.2rem 1.2rem;
  border-bottom: 2px solid var(--border);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
