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
  const submitForm =  (data) => {
   
    console.log(data);
  };

  return (
    <div>
      <HeaderComponent />
      <form onSubmit={handleSubmit(submitForm)}>

     
      <InputComponent  
       id="password"
       type="password"
       label="Digite sua senha"
       register={{
         ...register("password", {
           required: "Campo obrigatório",
           minLength: {
             value: 6,
             message: "Campo precisa ter acima de 6 caracteres",
            },
          }),
        }}
        error={!!errors.password}
        errorMessage={errors.password?.message}/>
              <button type="submit"> Teste</button>

        </form>
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
            <FooterComponent />

    </div>
  );
}

export default App;
