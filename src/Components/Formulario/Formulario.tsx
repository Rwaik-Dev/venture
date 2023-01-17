import React, { useState } from "react";
import {
  Container,
  InputsForm,
  LabelForm,
  TextAreaForm,
  SelectForm,
  OptionsForm,
  ButtonForm,
} from "./style";

const Formulario = () => {
  const [formData, setFormData] = useState([]);

  return (
    <Container name="formReclamacao" onSubmit={() => alert("Reclamação enviada com sucesso")}>
    <LabelForm>Nome</LabelForm>
      <InputsForm
      required
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
      required
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
        required
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
        required
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
        required
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
        required
        rows={15}
        onChange={(e) => {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            })
        }}
        />
        <ButtonForm>Enviar Reclamação</ButtonForm>
    </Container>
  );
};

export default Formulario;
