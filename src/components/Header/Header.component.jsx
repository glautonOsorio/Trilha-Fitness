import * as Styled from "./Header.styles";

export function HeaderComponent() {
  return (
    <Styled.HeaderContainer>
      <Styled.HeaderTextContent>
        <Styled.HeaderSpan> Trail-Fitness FuturoDev</Styled.HeaderSpan>
      </Styled.HeaderTextContent>
      <Styled.HeaderTextContent>
        <Styled.HeaderSpan>Explore Trails</Styled.HeaderSpan>
        <Styled.HeaderSpan>Register new Trails</Styled.HeaderSpan>
      </Styled.HeaderTextContent>
    </Styled.HeaderContainer>
  );
}
