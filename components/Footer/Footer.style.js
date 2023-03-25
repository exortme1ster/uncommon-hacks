import styled from "styled-components";

export const FooterSection = styled.footer`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.4rem;
  padding: 9.8rem 0;
  background-color: var(--primary);
  color: var(--text-1);
  justify-items: center;
`;

export const ContactSection = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  color: var(--text-2);
  gap: 2.4rem;
`;

export const ContactInfo = styled.p`
  font-size: 2.4rem;
`;

export const ContactInfoContainer = styled.div``;

export const Border = styled.div`
  border-top: 2px solid var(--border);
`;

export const AlignRight = styled.div`
  align-self: flex-end;
`;
