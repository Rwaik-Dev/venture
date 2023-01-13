import React, { useState } from "react";
import {
  Container,
  InputsForm,
  LabelForm,
  TextAreaForm,
  SelectForm,
  OptionsForm,
} from "./style";

const Formulario = () => {
  const [formData, setFormData] = useState([]);
  return (
    <Container>
    <LabelForm>Nome</LabelForm>
      <InputsForm
        type={"text"}
        name="nome"
        onChange={(e) => {
          setFormData({
            ...formData,
            [e.target.name]: e.target.value,
          });
        }}
      />
    <LabelForm>Sobrenome</LabelForm>

      <InputsForm
        type={"text"}
        name="sobrenome"        
        onChange={(e) => {
          setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        console.log(formData)
        }}
      />
    <LabelForm>Email</LabelForm>

        <InputsForm
        type={"email"}
        name="email"        
        onChange={(e) => {
          setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        console.log(formData)
        }}
      />
    <LabelForm>Numero do Ônibus</LabelForm>

        <InputsForm
        type={"text"}
        name="numeroOnibus"        
        onChange={(e) => {
          setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        console.log(formData)
        }}
      />
    <LabelForm>Selecione a linha: </LabelForm>

      <SelectForm
        name="linha"
        onChange={(e) => {
          setFormData({
            ...formData,
            [e.target.name]: e.target.value,
            
          });
        }}
      >
        <OptionsForm value={"Linha 1"}>Linha 1</OptionsForm>
        <OptionsForm value={"Linha 2"}>Linha 2</OptionsForm>
        <OptionsForm value={"Linha 3"}>Linha 3</OptionsForm>
        <OptionsForm value={"Linha 4"}>Linha 4</OptionsForm>
      </SelectForm>
        <LabelForm>Informe o ocorrido abaixo:</LabelForm>
        <TextAreaForm
        name="message"
        onChange={(e) => {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            })
        }}
        />
    </Container>
  );
};

export default Formulario;
