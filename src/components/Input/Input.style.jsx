import styled from "styled-components";

export const InputGroup = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
`;

export const Label = styled.label`
  display: flex;
  align-items: flex-start;
  gap: 0.625rem;
  align-self: stretch;
  color: ${({ $color }) => {
    return $color === "danger" ? "#BE2E2E" : "#304050";
  }};
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Input = styled.input`
  display: flex;
  padding: 0.5rem;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 0.3125rem;
  font-size: 1rem;
  border: 1px solid
    ${({ $color }) => {
      return $color === "danger" ? "#BE2E2E" : "#B3B9BB";
    }};
  color: ${({ $color }) => {
    return $color === "danger" ? "#BE2E2E" : "#304050";
  }};
  background-color: transparent;
  width: 100%;
  height: 3rem;
`;

export const TextArea = styled.textarea`
  display: flex;
  padding: 0.5rem;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 0.3125rem;
  border: 1px solid
    ${({ $color }) => {
      return $color === "danger" ? "#BE2E2E" : "#B3B9BB";
    }};
  color: ${({ $color }) => {
    return $color === "danger" ? "#BE2E2E" : "#304050";
  }};
  height: 5rem;
`;

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const Icon = styled.button`
  position: absolute;
  top: 0.7rem;
  right: 0.7rem;
  cursor: pointer;
  background: transparent;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ $color }) => {
    return $color === "danger" ? "#BE2E2E" : "#304050";
  }};
`;

export const ErrorSpan = styled.span`
  display: flex;
  align-items: flex-start;
  gap: 0.625rem;
  align-self: stretch;
  color: #be2e2e;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
