import "./App.css";
import { FooterComponent } from "./components/Footer/Footer.component";
import { HeaderComponent } from "./components/Header/Header.component";
import { InputComponent } from "./components/Input/Input.component";
import { SelectComponent } from "./components/Select/Select.component";

import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const selectGender = [
    { value: "", label: "Selecione" },
    { value: "male", label: "Masculino" },
    { value: "female", label: "Feminino" },
    { value: "other", label: "Outro" },
  ];

  return (
    <div>
      <HeaderComponent />
      <FooterComponent />
      <InputComponent id="password" type="password" label="Digite sua senha" />
      <SelectComponent
        id={"gender"}
        label={"Gênero"}
        error={!!errors.gender}
        helperText={errors.gender?.message}
        option={selectGender}
        register={{
          ...register("gender", { required: "Selecione uma das opções" }),
        }}
      />
    </div>
  );
}

export default App;
