import styled from 'styled-components';

export const MainWrapper = styled.div`
display: flex;
flex-direction: column;
width: 100%;
background-color: #fff;
`;

export const MainImage = styled.img`
  width: 100%;
  object-fit: cover;
  filter: brightness(40%);
  height: 45rem;
  
`;


export const MainRelative = styled.div`
position: absolute;
  z-index: 1000;
  top: 50%; /* Position the top edge of the element at the vertical center */
  left: 50%; /* Position the left edge of the element at the horizontal center */
  transform: translate(-50%, -50%); /* Translate back by half of the element's width and height */
  text-align: center; /* Center text horizontally */
  color: white; /* Example: make text white for visibility */
  
`;
