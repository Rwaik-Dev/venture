import React from "react";
import { Marca } from "../../Icons/Icons";
import { Button, Container, Divider, DivImage } from "./styles";

const HeaderPage = () => {
  return (
    <Container>
      <Divider>
        <DivImage>
          <Marca />
        </DivImage>
      </Divider>
      <Divider>
        <Button onClick={() => alert("Botão Home")}>Home</Button>
        <Button onClick={() => alert("Botão Sobre Nós")}>Sobre nós</Button>
        <Button onClick={() => alert("Botão Reclamações")}>Reclamaçoes</Button>
        <Button onClick={() => alert("Botão Contato")}>Contato</Button>
      </Divider>
      <Divider>
        <></>
      </Divider>
    </Container>
  );
};

export default HeaderPage;
