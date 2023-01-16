import React from "react";
import CardNoticias from "../../Components/CardNoticias/CardNoticias";
import Footer from "../../Components/Footer/Footer";
import HeaderPage from "../../Components/Header/HeaderPage";
import { Container, Title, Text } from "./styles";
import { dataCards } from "../../Data/data";

const Noticias = () => {
  return (
    <>
      <HeaderPage />
      <Container>
        <Title>Noticias</Title>
        <Text>
          A empresa Venture acaba de lançar sua nova página de notícias,
          oferecendo aos seus leitores uma ampla variedade de conteúdos sobre
          negócios, tecnologia e inovação. Com uma interface fácil de usar e um
          design moderno, a página de notícias da Venture oferece notícias
          atualizadas diariamente, além de análises e comentários de
          especialistas em diversos setores.
        </Text>
        <Text>
          Com a nova página de notícias, a Venture busca se posicionar como uma
          referência no mundo dos negócios e inovação, oferecendo aos seus
          leitores conteúdos relevantes e atualizados. Acesse agora e fique por
          dentro das últimas novidades do mundo dos negócios!
        </Text>
        {dataCards.map(function (item, index) {
          return (
            <CardNoticias
              sourceImage={item.img}
              text={item.materiaCompleta}
              title={item.title}
              key={index}
            />
          );
        })}
      </Container>
      <Footer />
    </>
  );
};

export default Noticias;
