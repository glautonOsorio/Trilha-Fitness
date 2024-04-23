import { useNavigate } from "react-router-dom";
import * as Styled from "./Main.styles";

export function MainPage() {
  const navigate = useNavigate();

  const toTrailsList = () => {
    navigate("/trail-cards");
  };

  const registerTrails = () => {
    navigate("/register-trails");
  };

  return (
    <>
      <Styled.MainImage
        src="../../public/trails-image.png"
        alt="imagem de trilha"
      />
      <Styled.MainRelative>
        <Styled.MainTitle>
          Que tal aproveitar um tempo com a natureza?
        </Styled.MainTitle>
        <Styled.MainSubtitle>
          Junte-se à comunidade de entusiastas ao ar livre, compartilhe suas
          aventuras e inspire-se com as experiências de outros aventureiros.
          Prepare-se para explorar novos horizontes e se conectar com a natureza
          através do Adventure Trails!
        </Styled.MainSubtitle>
        <Styled.CustomButton
          onClick={toTrailsList}
          variant="contained"
          size="medium"
        >
          Explore Trilhas
        </Styled.CustomButton>
      </Styled.MainRelative>
      <Styled.MainWrapper>
        <Styled.MainColumn>
          <Styled.TextColumn>
            <Styled.MainTitle2>Explore trilhas incríveis</Styled.MainTitle2>
            <Styled.MainSubtitle2>
              "Trail-Fitness FuturoDev" é sua fonte confiável para descobrir e
              compartilhar as melhores trilhas de trekking e ciclismo
              globalmente. Explore rotas incríveis, desde caminhos tranquilos
              por florestas até trilhas desafiadoras em montanhas imponentes.
              Oferecemos informações detalhadas, como distância, dificuldade e
              pontos de interesse naturais, junto com dicas eco-friendly para
              uma experiência completa e responsável.
            </Styled.MainSubtitle2>
          </Styled.TextColumn>
          <Styled.CustomButton
            onClick={toTrailsList}
            variant="contained"
            size="medium"
          >
            Explore Trilhas
          </Styled.CustomButton>
        </Styled.MainColumn>
        <Styled.MainRow>
          <Styled.MainColumn>
            <Styled.MainTitle3>
              Compartilhe fotos, dicas e localização das suas trilhas favoritas
            </Styled.MainTitle3>
            <Styled.CustomButton
              onClick={registerTrails}
              variant="contained"
              size="medium"
            >
              Cadastre Trilhas
            </Styled.CustomButton>
          </Styled.MainColumn>
          <Styled.TrailImage
            src="https://lh5.googleusercontent.com/p/AF1QipPwyTkOY7s0EHl8xjlH82fCNBLTOXlSyTGtR_Ql=w680-h510-p-k-no"
            alt="imagem de trilha"
          />
        </Styled.MainRow>
      </Styled.MainWrapper>
    </>
  );
}
