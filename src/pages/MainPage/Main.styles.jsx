import styled from "styled-components";
import Button from "@mui/material/Button";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #fff;
  gap: 10rem;

  @media (max-width: 1024px) {
    gap: 5rem;
  }
`;

export const MainImage = styled.img`
  width: 100%;
  object-fit: cover;
  filter: brightness(40%);
  height: 45rem;

  @media (max-width: 1024px) {
    height: 30rem;
  }
`;

export const MainRelative = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 1000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1rem;
  text-align: center;
  align-items: center;
  color: white;

  @media (max-width: 1024px) {
    position: static;
    transform: none;
    background-color: #fff;
    color: #000;
  }
`;

export const MainTitle = styled.h1`
  font-weight: 600;
  font-size: 2.5rem;
  line-height: 2.25rem;
  text-align: center;
  padding: 1rem;

  @media (max-width: 1024px) {
    font-size: 2rem;
    line-height: 1.8rem;
  }
`;

export const MainSubtitle = styled.span`
  font-size: 1rem;
  font-weight: 400;
  padding: 2rem;
  line-height: 1.5rem;
  letter-spacing: 0.01em;
  text-align: center;

  @media (max-width: 1024px) {
    padding: 1rem;
  }
`;

export const CustomButton = styled(Button)`
  background-color: #504908 !important;
  font-size: 1rem !important;
  font-weight: 200 !important;
  color: #ffff !important;

  @media (max-width: 1024px) {
    font-size: 0.8rem !important;
  }
`;

export const MainColumn = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  height: 100%;
  height: 15rem;
  padding: 1rem;
  gap: 1rem;

  @media (max-width: 1024px) {
    height: auto;
  }
`;

export const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
  gap: 1rem;

  @media (max-width: 1024px) {
    align-items: center;
  }
`;

export const MainTitle2 = styled.h2`
  font-weight: 600;
  font-size: 2.5rem;
  line-height: 2.25rem;
  padding: 1rem;

  @media (max-width: 1024px) {
    font-size: 2rem;
    line-height: 1.8rem;
  }
`;

export const MainSubtitle2 = styled.span`
  font-size: 1.2rem;
  font-weight: 400;
  padding: 1rem;

  @media (max-width: 1024px) {
    padding: 0.5rem;
  }
`;

export const MainRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const MainTitle3 = styled.h3`
  font-size: 3rem;
  font-weight: 400;
  line-height: 4.5rem;
  letter-spacing: -0.015em;
  text-align: left;

  @media (max-width: 1024px) {
    font-size: 2.5rem;
    line-height: 3.75rem;
  }
`;

export const TrailImage = styled.img`
  background-repeat: no-repeat;
  background-position-y: 70%;
  background-position-x: center;
  max-width: 35rem;
  max-height: 25rem;
  height: auto;

  @media (max-width: 1024px) {
    max-width: 25rem;
    max-height: 20rem;
  }
`;
