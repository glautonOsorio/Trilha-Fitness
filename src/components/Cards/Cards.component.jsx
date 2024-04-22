import { Chip, Rating } from "@mui/material";
import * as Styled from "./Cards.styles";

export function CardsComponent({ item }) {
  return (
    <Styled.CardContainer>
      <Styled.TrailImage src={item.image_url} alt="imagem trilha" />
      <Styled.CardContent>
        <Styled.CardTitle>
          {item.trail_name} - {item.city}  /
           <br /> {item.state}
        </Styled.CardTitle>
        <Styled.CardText>Por: {item.username}</Styled.CardText>
        <Styled.CardColumn>
          <Styled.CardText>Duração: {item.duration}</Styled.CardText>
          <Styled.CardText>Trajeto: {item.route}</Styled.CardText>
        </Styled.CardColumn>
        <Styled.CardRow>
          <Chip label={item.difficulty} />
          <Chip label={item.trail_type} />
        </Styled.CardRow>
          <Rating name="read-only" value={4}   />
      </Styled.CardContent>
    </Styled.CardContainer>
  );
}
