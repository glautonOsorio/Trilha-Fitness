import * as Styled from "./Footer.styles";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

export function FooterComponent() {
  return (
    <Styled.FooterContainer>
      <Styled.FooterTextContent>
        <Styled.StyledLink to="/"> Trail-Fitness FuturoDev</Styled.StyledLink>
      </Styled.FooterTextContent>
      <Styled.FooterTextContent>
        <Styled.StyledLink to="https://github.com/glautonOsorio">
          <GitHubIcon />
        </Styled.StyledLink>
        <Styled.StyledLink to="https://www.linkedin.com/in/glauton-osorio/">
          <LinkedInIcon />
        </Styled.StyledLink>
        <Styled.StyledLink>
          <QuestionMarkIcon />
        </Styled.StyledLink>
      </Styled.FooterTextContent>
    </Styled.FooterContainer>
  );
}
