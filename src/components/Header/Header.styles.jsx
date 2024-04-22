import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  width: 100%;
  height: 5rem;
  background: #504908;
`;

export const HeaderTextContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const HeaderSpan = styled.span`
  font-size: 1;
  font-weight: 400;
  color: #ffffff;
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  color: #ffffff;
  padding: 10px 15px;
  gap: 15px;
  text-decoration: none;
`;
