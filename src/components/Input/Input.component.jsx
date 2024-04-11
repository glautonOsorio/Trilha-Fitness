import PropTypes from "prop-types";
import { useState } from "react";

import * as Styled from "./Input.style";

import TextField from "@mui/material/TextField";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export const InputComponent = ({
  label,
  type,
  id,
  placeholder,
  register,
  error,
  onInput,
  helperText,
  step,
  readOnly = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Styled.InputGroup>
      <TextField
        id={id}
        onInput={onInput}
        step={step}
        label={label}
        error={error}
        type={showPassword ? "text" : type}
        placeholder={placeholder}
        helperText={helperText}
        {...register}
        inputProps={{ readOnly: readOnly }}
        InputLabelProps={{ shrink: true }}
      >
        {type === "password" && (
          <Styled.Icon type="button" onClick={handleShowPassword}>
            {!showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </Styled.Icon>
        )}
      </TextField>
    </Styled.InputGroup>
  );
};

InputComponent.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  register: PropTypes.any,
  error: PropTypes.any,
  helperText: PropTypes.any,
  readOnly: PropTypes.bool,
};
