import React from "react";
import { MarcaBranco } from "../../Midea/Images/Images";
import { Button, Container, Divider, DivImage } from "./styles";

const HeaderPage = () => {
  return (
    <Container>
      <Divider>
        <DivImage>
          <MarcaBranco />
        </DivImage>
      </Divider>
      <Divider>
        <Button onClick={() => alert("Botão Home")}>Home</Button>
        <Button onClick={() => alert("Botão Sobre Nós")}>Sobre nós</Button>
        <Button onClick={() => alert("Botão Reclamações")}>Reclamaçoes</Button>
        <Button onClick={() => alert("Botão Noticias")}>Noticias</Button>
      </Divider>
      <Divider>
        <></>
      </Divider>
    </Container>
  );
};

export default HeaderPage;
