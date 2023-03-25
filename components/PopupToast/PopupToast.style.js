import styled from "styled-components";

export const ToastDiv = styled.div`
  position: absolute;
  right: 2%;
  bottom: 2%;
  font-size: 3.2rem;
  padding: 1.2rem 2.4rem;
  background-color: ${(props) =>
    props.isSuccess ? "var(--success)" : "var(--failure)"};
  color: ${(props) =>
    props.isSuccess ? "var(--success-text)" : "var(--failure-text)"};
`;

export const ToastText = styled.p``;
