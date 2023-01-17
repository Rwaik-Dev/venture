import React from "react";
import CardComentarios from "../CardComentarios/CardComentarios";
import { Container, Text, Title } from "./styles";
import { comentario } from "../../Data/data";
const Comentarios = () => {
  return (
    <Container>
        <Title>
            Comentarios
        </Title>
        <Text>
            Veja abaixo alguns comentarios de pessoas que utilizam nosso serviço diariamente: 
        </Text>
      {comentario.map(function (item) {
        return (
          <CardComentarios
            sexo={item.sexo}
            comentario={item.comentario}
            nomeAutor={item.nome}
            dias={item.dias}
          />
        );
      })}
    </Container>
  );
};

export default Comentarios;
