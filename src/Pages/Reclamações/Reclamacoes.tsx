import React from "react";
import Footer from "../../Components/Footer/Footer";
import Formulario from "../../Components/Formulario/Formulario";
import HeaderPage from "../../Components/Header/HeaderPage";
import { Container, Text, Title } from "./styles";

const Reclamacoes = () => {
  return (
    <>
      <HeaderPage />
      <Container>
        <Title>Reclamações</Title>
        <Text>
          A Venture tem orgulho de apresentar a sua nova página de reclamações,
          a qual foi desenvolvida para fornecer aos nossos clientes uma
          plataforma segura e de fácil acesso para que possam compartilhar seus
          comentários e sugestões.
        </Text>
        <Text>
          Através desta página, os nossos clientes podem relatar problemas que
          tenham tido com os nossos produtos ou serviços, bem como compartilhar
          idéias e sugestões para melhorar a qualidade dos nossos serviços.
        </Text>
        <Text>
          Nossa equipe de atendimento ao cliente lerá todas as suas mensagens e
          trabalhará para garantir que todas as suas preocupações sejam tratadas
          o mais rápido possível.
        </Text>
        <Text>
          Agradecemos a sua contribuição para o nosso negócio e esperamos que
          continue usando nossos serviços.
        </Text>
        <Text>
          Se você gostaria de nós enviar uma reclamação ou sugestão, preencha o formulário de abaixo.
        </Text>
        <Text>Obrigado por escolher a Venture!</Text>
        <Formulario />
      </Container>
      <Footer />
    </>
  );
};

export default Reclamacoes;
