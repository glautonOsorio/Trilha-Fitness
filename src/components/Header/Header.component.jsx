import * as Styled from "./Header.styles";

export function HeaderComponent() {
  return (
    <Styled.HeaderContainer>
      <Styled.HeaderTextContent>
        <Styled.StyledLink to="/"> Trail-Fitness FuturoDev</Styled.StyledLink>
      </Styled.HeaderTextContent>
      <Styled.HeaderTextContent>
        <Styled.StyledLink to="/trail-cards">Explore Trails</Styled.StyledLink>
        <Styled.StyledLink to="/register-trails">
          Register new Trails
        </Styled.StyledLink>
      </Styled.HeaderTextContent>
    </Styled.HeaderContainer>
  );
}
