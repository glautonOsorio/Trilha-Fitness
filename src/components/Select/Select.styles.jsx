import styled from "styled-components";

export const SelectGroup = styled.div`
display: flex;
width: 100%;
flex-direction: column;
align-items: flex-start;
gap: 0.5rem;
`;
export const FormSelect = styled.select`
display: flex;
padding: 0.5rem;
align-items: flex-start;
align-self: stretch;
text-align: center;
border-radius: 0.3125rem;
border: 1px solid
  ${({ $color }) => {
    return $color === "danger" ? "#BE2E2E" : "#5281DC";
  }};
width: 100%;
  color: ${({ $color }) => {
    return $color === "danger" ? "#BE2E2E" : "#304050";
  }};
  background-color: transparent;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
`;

export const HelperText = styled.p`
display: flex;
align-items: flex-start;
gap: 0.625rem;
align-self: stretch;
color: #BE2E2E;
font-size: 0.75rem;
font-style: normal;
font-weight: 400;
line-height: normal;
`;
