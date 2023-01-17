import React from "react";
import { MarcaBranco } from "../../Midea/Images/Images";
import { Button, Container, Divider, DivImage } from "./styles";
import { Link } from "react-router-dom";

const HeaderPage = () => {
  return (
    <Container>
      <Divider>
        <DivImage>
          <MarcaBranco />
        </DivImage>
      </Divider>
      <Divider>
        <Link to={"/"}>
          <Button>Home</Button>
        </Link>
        <Link to={"/sobre-nos"}>
          <Button>Sobre nós</Button>
        </Link>
        <Link to={"/reclamacoes"}>
          <Button>Reclamaçoes</Button>
        </Link>
        <Link to={"/noticias"}>
          <Button>Noticias</Button>
        </Link>
      </Divider>
      <Divider>
        <></>
      </Divider>
    </Container>
  );
};

export default HeaderPage;
