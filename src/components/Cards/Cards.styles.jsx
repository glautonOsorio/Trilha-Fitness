import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 75%;
  box-shadow: 0.5rem 0.5rem 0.5rem #b3b9bb;
  @media (max-width: 1200px) {
    width: 90%;
    flex-direction: column;
    align-items: center;
  }
`;

export const TrailImage = styled.img`
  background-repeat: no-repeat;
  background-position-y: 70%;
  background-position-x: center;
  max-width: 35rem;
  max-height: 25rem;
  height: auto;

  @media (max-width: 1200px) {
    max-width: 25rem;
    max-height: 20rem;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 2rem;
  gap: 1rem;

  @media (max-width: 1200px) {
    padding: 1rem;
  }
`;

export const CardRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const CardColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CardTitle = styled.h1`
  color: #000;
  font-weight: 800;
  font-size: 1.5rem;
  line-height: 2.5;

  @media (max-width: 1200px) {
    font-size: 1.2rem;
  }
`;

export const CardText = styled.span`
  color: #747779;
  font-weight: 400;
  font-size: 0.8rem;
  line-height: 1rem;

  @media (max-width: 1200px) {
    font-size: 0.7rem;
  }
`;
