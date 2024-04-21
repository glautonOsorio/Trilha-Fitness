import PropTypes from "prop-types";
import * as Styled from "./Select.styles";
import { useContext } from "react";

export const SelectComponent = ({
  register,
  error,
  helperText,
  label,
  option,
  id,
}) => {
  return (
    <Styled.SelectGroup>
      <Styled.SelectLabel $color={error && "danger"} htmlFor={id}>
        {label}
      </Styled.SelectLabel>
      <Styled.FormSelect id={id} $color={error && "danger"} {...register}>
        {option &&
          option.map((item, index) => {
            return (
              <Styled.SelectOption key={index} value={item?.value}>
                {item?.label}
              </Styled.SelectOption>
            );
          })}
      </Styled.FormSelect>
      {error && (
        <Styled.HelperText $color={error && "danger"}>
          {helperText}
        </Styled.HelperText>
      )}
    </Styled.SelectGroup>
  );
};

SelectComponent.propTypes = {
  register: PropTypes.any,
  option: PropTypes.any,
  error: PropTypes.any,
  value: PropTypes.any,
  type: PropTypes.string,
  id: PropTypes.string,
};
