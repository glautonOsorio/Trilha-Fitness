import styled from "styled-components";
export const BackgroundImage = styled.img`
  height: 20rem;
  width: 100%;
  object-fit: cover;
  filter: brightness(40%);

  @media (max-width: 1024px) {
    height: 15rem;
  }
`;

export const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #ffff;
  gap: 6rem;
  padding: 2rem;

  @media (max-width: 1024px) {
    gap: 3rem;
  }
`;

export const CardsTitle = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  line-height: 2.5rem;
  text-align: center;
  color: #504908;

  @media (max-width: 1024px) {
    font-size: 2.5rem;
    line-height: 2rem;
  }
`;

export const CardsLoading = styled.span`
  height: 50%;
  font-size: 2rem;
  font-weight: 400;
  line-height: 5rem;
  text-align: center;
  color: #000;

  @media (max-width: 1024px) {
    font-size: 1.5rem;
    line-height: 4rem;
  }
`;

export const TrailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  padding: 2rem;

  @media (max-width: 1024px) {
    gap: 3rem;
  }
`;
