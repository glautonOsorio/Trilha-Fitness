import styled from "styled-components";


export const CardContainer = styled.div`
display: flex;
flex-direction: row;
width: 75%;
box-shadow: 0.5rem 0.5rem 0.5rem #B3B9BB;
`

export const TrailImage = styled.img`
  background-repeat: no-repeat;
  background-position-y: 70%;
  background-position-x: center;
  max-width: 35rem;
  max-height: 25rem;
  height: auto;
`;


export const CardContent = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
padding: 2rem;
gap: 1rem;
`

export const CardRow = styled.div`
display: flex;
flex-direction: row;
gap: 1rem;
`

export const CardColumn = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
`

export const CardTitle = styled.h1`
color: #000 ;
font-weight: 800;
font-size: 1.5rem;
line-height: 2.5;
`;

export const CardText = styled.span`
color: #747779 ;
font-weight: 400;
font-size: 0.8;
line-height: 1rem;  
`;