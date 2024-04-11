import * as Styled from "./Footer.styles";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

export function FooterComponent() {
  return (
    <Styled.FooterContainer>
      <Styled.FooterTextContent>
        <Styled.FooterSpan> Trail-Fitness FuturoDev</Styled.FooterSpan>
      </Styled.FooterTextContent>
      <Styled.FooterTextContent>
        <Styled.FooterSpan>
          <GitHubIcon />
        </Styled.FooterSpan>
        <Styled.FooterSpan>
          <LinkedInIcon />
        </Styled.FooterSpan>
        <Styled.FooterSpan>
          <QuestionMarkIcon />
        </Styled.FooterSpan>
      </Styled.FooterTextContent>
    </Styled.FooterContainer>
  );
}
