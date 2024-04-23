import { NavLink } from "react-router-dom";
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

  @media (max-width: 1024px) {
    height: auto;
    padding: 2rem 1rem;
  }
`;

export const FooterTextContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  @media (max-width: 1024px) {
    align-items: center;
    gap: 0.5rem;
  }
`;

export const FooterSpan = styled.span`
  font-size: 1rem; /* Corrected typo here */
  font-weight: 400;
  color: #ffffff;

  @media (max-width: 1024px) {
    font-size: 0.8rem;
  }
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  color: #ffffff;
  padding: 1rem 1.5rem;
  gap: 1.5rem;
  text-decoration: none;

  @media (max-width: 1024px) {
    padding: 0.8rem 1rem;
    gap: 1rem;
  }
`;
