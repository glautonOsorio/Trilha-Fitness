import PropTypes from "prop-types";
import * as Styled from "./Select.styles";
import { useContext } from "react";

export const SelectComponent = ({
  register,
  error,
  helperText,
  
  option,
  id,
}) => {
  return (
    <Styled.SelectGroup>
      
      <Styled.FormSelect id={id} $color={error && "danger"} {...register}>
        {option &&
          option.map((item, index) => {
            return (
              <option key={index} value={item?.value}>
                {item?.label}
              </option>
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
