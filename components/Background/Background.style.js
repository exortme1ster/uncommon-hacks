import styled from "styled-components";

export const BackgroundSection = styled.div`
  background-color: var(--primary);
  height: min-height: 100vh;

  background-image: repeating-linear-gradient(45deg, var(--gray1) 0, var(--gray2) 10px, transparent 0, transparent 50%);
background-size: 32px 32px;
background-color: var(--gray2);
z-index: -2;

`;
