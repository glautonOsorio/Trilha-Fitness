import styled from "styled-components";

export const Form = styled.form`
  width: 60%;
  margin: 1rem;
  padding: 1rem;
  border: none;
`;

export const FormColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 0.5rem;
  gap: 1rem;
`;

export const FormRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  width: 100%;
  gap: 1rem;
  margin: 0.5rem;
`;

export const FormTitle = styled.legend`
  color: #000;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 1rem;
`;
export const FormSubTitle = styled.legend`
  color: #000;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 1rem;
`;

export const FormLegend = styled.legend`
  color: #000;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 1rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;
