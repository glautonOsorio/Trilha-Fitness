import * as Styled from "./Form.styles";

import Button from "@mui/material/Button";

import { TrailsContext } from "../../contexts/DataContext";

import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { InputComponent } from "../Input/Input.component";
import { SelectComponent } from "../Select/Select.component";

export function FormComponent() {
  const navigate = useNavigate();

  const { addTrail, trails } = useContext(TrailsContext);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const selectState = [
    { value: "", label: "Selecione o seu Estado" },
    { value: "Acre", label: "Acre" },
    { value: "Alagoas", label: "Alagoas" },
    { value: "Amapá", label: "Amapá" },
    { value: "Amazonas", label: "Amazonas" },
    { value: "Bahia", label: "Bahia" },
    { value: "Ceará", label: "Ceará" },
    { value: "Distrito Federal", label: "Distrito Federal" },
    { value: "Espírito Santo", label: "Espírito Santo" },
    { value: "Goiás", label: "Goiás" },
    { value: "Maranhão", label: "Maranhão" },
    { value: "Mato Grosso", label: "Mato Grosso" },
    { value: "Mato Grosso do Sul", label: "Mato Grosso do Sul" },
    { value: "Minas Gerais", label: "Minas Gerais" },
    { value: "Pará", label: "Pará" },
    { value: "Paraíba", label: "Paraíba" },
    { value: "Paraná", label: "Paraná" },
    { value: "Pernambuco", label: "Pernambuco" },
    { value: "Piauí", label: "Piauí" },
    { value: "Rio de Janeiro", label: "Rio de Janeiro" },
    { value: "Rio Grande do Norte", label: "Rio Grande do Norte" },
    { value: "Rio Grande do Sul", label: "Rio Grande do Sul" },
    { value: "Rondônia", label: "Rondônia" },
    { value: "Roraima", label: "Roraima" },
    { value: "Santa Catarina", label: "Santa Catarina" },
    { value: "São Paulo", label: "São Paulo" },
    { value: "Sergipe", label: "Sergipe" },
    { value: "Tocantins", label: "Tocantins" },
  ];
  const selectTrailType = [
    { value: "", label: "Selecione" },
    { value: "hiking", label: "Caminhada" },
    { value: "trekking", label: "Trekking" },
  ];

  const selectDifficulty = [
    { value: "", label: "Selecione" },
    { value: "beginner", label: "Iniciante" },
    { value: "intermediate", label: "Intermediário" },
    { value: "hard", label: "Difícil" },
  ];

  const submitForm = async (data) => {
    addTrail({
      ...data,
      duration: Number(data.duration),
      route: Number(data.route),
    });
  };

  const returnToHome = () => {
    navigate("/");
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
            label="Nome da trilha"
            register={{
              ...register("trail_name", {
                required: "Campo obrigatório",
                minLength: {
                  value: 6,
                  message: "Campo precisa ter acima de 6 caracteres",
                },
                maxLength: {
                  value: 100,
                  message: "Campo precisa ter menos de 100 caracteres",
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
            placeholder="Digite a duração em minutos"
            label="Duração Estimada (min)"
            register={{
              ...register("duration", {
                required: "Campo obrigatório",
                minLength: {
                  value: 3,
                  message: "Campo precisa ter acima de 3 caracteres",
                },
              }),
            }}
            error={!!errors.duration}
            errorMessage={errors.duration?.message}
          />
          <InputComponent
            id="route"
            name="route"
            type="number"
            placeholder="Digite a distancia em (km)"
            label="Trajeto (km)"
            register={{
              ...register("route", {
                required: "Campo obrigatório",
                minLength: {
                  value: 2,
                  message: "Campo precisa ter acima de 2 caracteres",
                },
              }),
            }}
            error={!!errors.route}
            errorMessage={errors.route?.message}
          />
        </Styled.FormRow>
        <Styled.FormRow>
          <InputComponent
            id="city"
            name="city"
            type="text"
            placeholder="Digite o nome da cidade"
            label="Cidade"
            register={{
              ...register("city", {
                required: "Campo obrigatório",
                minLength: {
                  value: 4,
                  message: "Campo precisa ter acima de 4 caracteres",
                },
                maxLength: {
                  value: 60,
                  message: "Campo precisa ter menos de 60 caracteres",
                },
              }),
            }}
            error={!!errors.city}
            errorMessage={errors.city?.message}
          />
          <SelectComponent
            id={"state"}
            name="state"
            error={!!errors.state}
            helperText={errors.state?.message}
            option={selectState}
            label="Estado"
            register={{
              ...register("state", { required: "Selecione uma das opções" }),
            }}
          />
        </Styled.FormRow>
        <Styled.FormRow>
          <InputComponent
            id="username"
            name="username"
            type="text"
            placeholder="O nome completo do usurário"
            label="Nome Completo do Usuário"
            register={{
              ...register("username", {
                minLength: {
                  value: 5,
                  message: "Campo precisa ter acima de 5 caracteres",
                },
                maxLength: {
                  value: 60,
                  message: "Campo precisa ter menos de 60 caracteres",
                },
              }),
            }}
            error={!!errors.username}
            errorMessage={errors.username?.message}
          />
          <SelectComponent
            id={"difficulty"}
            name="difficulty"
            error={!!errors.difficulty}
            helperText={errors.difficulty?.message}
            option={selectDifficulty}
            label="Dificuldade"
            register={{
              ...register("difficulty", {
                required: "Selecione uma das opções",
              }),
            }}
          />
        </Styled.FormRow>
      </Styled.FormColumn>
      <Styled.FormColumn>
        <SelectComponent
          id={"trail_type"}
          name="trail_type"
          error={!!errors.trail_type}
          helperText={errors.trail_type?.message}
          option={selectTrailType}
          label="Tipo de trilha"
          register={{
            ...register("trail_type", { required: "Selecione uma das opções" }),
          }}
        />
        <InputComponent
          id="image_url"
          name="image_url"
          type="url"
          placeholder="Inserir o link da imagem da trilha"
          label="Url da imagem da trilha"
          register={{
            ...register("image_url", {
              minLength: {
                value: 8,
                message: "Campo precisa ter acima de 8 caracteres",
              },
              maxLength: {
                value: 300,
                message: "Campo precisa ter menos de 300 caracteres",
              },
            }),
          }}
          error={!!errors.image_url}
          errorMessage={errors.image_url?.message}
        />
        <Styled.ButtonWrapper>
          <Button
            variant="contained"
            size="medium"
            type="submit"
            style={{
              backgroundColor: "#504908",
            }}
          >
            Cadastrar
          </Button>
          <Button
            variant="contained"
            size="medium"
            type="button"
            onClick={returnToHome}
            style={{
              backgroundColor: "transparent",
              color: "#504908",
              border: "2px solid #504908",
              fontWeight: "700",
            }}
          >
            Voltar
          </Button>
        </Styled.ButtonWrapper>
      </Styled.FormColumn>
    </Styled.Form>
  );
}
