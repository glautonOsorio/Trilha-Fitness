import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  width: 100%;
  height: 5rem;
  background: #504908;
`;

export const FooterTextContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const FooterSpan = styled.span`
  font-size: 1;
  font-weight: 400;
  color: #ffffff;
`;
