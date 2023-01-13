import React from "react";
import Footer from "../../Components/Footer/Footer";
import Formulario from "../../Components/Formulario/Formulario";
import HeaderPage from "../../Components/Header/HeaderPage";
import { Container } from "./styles";

const Reclamacoes = () => {
  return (
    <>
      <HeaderPage />
      <Container>
        <Formulario/>
      </Container>
      <Footer />
    </>
  );
};

export default Reclamacoes;
