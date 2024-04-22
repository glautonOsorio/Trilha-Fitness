import { Chip, Rating } from "@mui/material";
import * as Styled from "./Cards.styles";

export function CardsComponent({ item }) {
  return (
    <div>
      <Styled.TrailImage src={item.image_url} alt="imagem trilha" />
      <div>
        <h1>
          {item.trail_name} - {item.city} / {item.state}
        </h1>
        <h4>Por: {item.username}</h4>
        <div>
          <p>Duração: {item.duration}</p>
          <p>Trajeto: {item.route}</p>
        </div>
        <div>
          <Chip label={item.difficulty} />
          <Chip label={item.trail_type} />
        </div>
        <div>
          <Rating name="read-only" value={4} readOnly />
        </div>
      </div>
    </div>
  );
}
