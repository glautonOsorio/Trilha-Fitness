import Button from "@mui/material/Button";

import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import * as Styled from "./Form.styles";
import { InputComponent } from "../Input/Input.component";
import { SelectComponent } from "../Select/Select.component";

export function FormComponent() {
  const [disabled, setDisabled] = useState(true);
  const [saveDisable, setSaveDisable] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const selectGender = [
    { value: "", label: "Selecione o seu Estado" },
    { value: "male", label: "Masculino" },
    { value: "female", label: "Feminino" },
    { value: "other", label: "Outro" },
  ];

  const selectCivilStatus = [
    { value: "", label: "Selecione" },
    { value: "single", label: "Solteiro" },
    { value: "married", label: "Casado" },
    { value: "separated", label: "Separado" },
    { value: "divorced", label: "Divorciado" },
    { value: "widowed", label: "Viúvo" },
  ];

  const submitForm = (data) => {
    console.log(data);
  };

  return (
    <Styled.Form onSubmit={handleSubmit(submitForm)}>
      <Styled.FormTitle>Preencha os campos para cadastrar</Styled.FormTitle>
      <Styled.FormColumn>
        <Styled.FormSubTitle>Identificação</Styled.FormSubTitle>
        <Styled.FormRow>
          <InputComponent
            id="trail_name"
            name="trail_name"
            type="text"
            placeholder="Digite o nome da trilha"
            register={{
              ...register("trail_name", {
                required: "Campo obrigatório",
                minLength: {
                  value: 8,
                  message: "Campo precisa ter acima de 8 caracteres",
                },
                maxLength: {
                  value: 64,
                  message: "Campo precisa ter menos de 64 caracteres",
                },
              }),
            }}
            error={!!errors.trail_name}
            errorMessage={errors.trail_name?.message}
          />
        </Styled.FormRow>
        <Styled.FormRow>
          <InputComponent
            id="duration"
            name="duration"
            type="number"
            placeholder="Duração estimada (min)"
            register={{
              ...register("duration", {
                required: "Campo obrigatório",
                minLength: {
                  value: 8,
                  message: "Campo precisa ter acima de 8 caracteres",
                },
                maxLength: {
                  value: 64,
                  message: "Campo precisa ter menos de 64 caracteres",
                },
              }),
            }}
            error={!!errors.duration}
            errorMessage={errors.duration?.message}
          />
          <SelectComponent
            id={"state"}
            name="state"
            error={!!errors.state}
            helperText={errors.state?.message}
            option={selectGender}
            register={{
              ...register("state", { required: "Selecione uma das opções" }),
            }}
          />
        </Styled.FormRow>
        <Styled.FormRow>
          <InputComponent
            id="duration"
            name="duration"
            type="number"
            placeholder="Duração estimada (min)"
            register={{
              ...register("duration", {
                required: "Campo obrigatório",
                minLength: {
                  value: 8,
                  message: "Campo precisa ter acima de 8 caracteres",
                },
                maxLength: {
                  value: 64,
                  message: "Campo precisa ter menos de 64 caracteres",
                },
              }),
            }}
            error={!!errors.duration}
            errorMessage={errors.duration?.message}
          />
          <SelectComponent
            id={"state"}
            name="state"
            error={!!errors.state}
            helperText={errors.state?.message}
            option={selectGender}
            register={{
              ...register("state", { required: "Selecione uma das opções" }),
            }}
          />
        </Styled.FormRow>
      </Styled.FormColumn>
      <Styled.FormColumn>
        
      <SelectComponent
            id={"state"}
            name="state"
            error={!!errors.state}
            helperText={errors.state?.message}
            option={selectGender}
            register={{
              ...register("state", { required: "Selecione uma das opções" }),
            }}
          />
          <InputComponent
            id="duration"
            name="duration"
            type="url"
            placeholder="Duração estimada (min)"
            register={{
              ...register("duration", {
                required: "Campo obrigatório",
                minLength: {
                  value: 8,
                  message: "Campo precisa ter acima de 8 caracteres",
                },
                maxLength: {
                  value: 64,
                  message: "Campo precisa ter menos de 64 caracteres",
                },
              }),
            }}
            error={!!errors.duration}
            errorMessage={errors.duration?.message}
          />
        <Styled.ButtonWrapper>
          <Button variant="outlined" type="button" disabled={disabled}>
            Editar
          </Button>
          <Button variant="outlined" disabled={disabled}>
            Deletar
          </Button>
          <Button variant="outlined" disabled={saveDisable} type="submit">
            Salvar
          </Button>
        </Styled.ButtonWrapper>
      </Styled.FormColumn>
    </Styled.Form>
  );
}
