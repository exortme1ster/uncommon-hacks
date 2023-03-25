import styled from "styled-components";

export const AccountMain = styled.main`
  margin: 0 auto;
  max-width: 1200px;
  min-height: 100vh;
  position: relative;
`;

export const AccountBox = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 6.4rem;
  border-radius: var(--border-radius-large);
  background-color: var(--gray3);
  &:hover {
    background-color: var(--gray5);
  }
`;
export const AccountTitle = styled.h2`
  color: var(--text-0);
  font-weight: 400;
  font-size: 3rem;
  margin-bottom: 2.4rem;
`;
export const AccountInfo = styled.p`
  color: var(--text-1);
  font-size: 2.4rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
