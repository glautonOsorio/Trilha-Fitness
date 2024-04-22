import { CardsComponent } from "../../components/Cards/Cards.component";
import { TrailsContext } from "../../contexts/DataContext";
import * as Styled from "./CardsPage.styles";
import { useContext } from "react";

export function CardsPage() {
  const { isLoading, trails } = useContext(TrailsContext);
  return (
    <>
      <Styled.BackgroundImage src="/trails-image.png" alt="imagem de trilha" />
      <Styled.CardsWrapper>
        <Styled.CardsTitle>Explore trilhas incríveis</Styled.CardsTitle>
        <Styled.TrailContainer>
          {Array.isArray(trails) && !isLoading ? (
            trails.map((trail, index) => (
              <CardsComponent item={trail} key={index} />
            ))
          ) : (
            <Styled.CardsLoading> Trilhas estão carregando</Styled.CardsLoading>
          )}
        </Styled.TrailContainer>
      </Styled.CardsWrapper>
    </>
  );
}
