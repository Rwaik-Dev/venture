import React from "react";
import CardValores from "../../Components/CardValores/CardValores";
import Footer from "../../Components/Footer/Footer";
import HeaderPage from "../../Components/Header/HeaderPage";
import { Container, DivImage, Text } from "./styles";
import { Marca } from "../../Midea/Images/Images";
import Comentarios from "../../Components/Comentarios/Comentarios";

const SobreNos = () => {
  return (
    <>
      <HeaderPage />
      <Container>
        <DivImage>
          <Marca />
        </DivImage>
        <Text>
          Venture Transporte é uma empresa de transporte público fundada em 10
          de Janeiro de 1980 por um grupo de visionários. Desde então, a Venture
          Transporte tem se dedicado a fornecer transporte seguro, confiável e
          acessível para as pessoas em todas as partes do país. Na década de 80,
          a empresa começou a se expandir para diversos estados, adquirindo
          diversos veículos para atender às necessidades de transporte de seus
          clientes. A Venture Transporte também investiu em tecnologia para
          oferecer a melhor experiência de viagem possível.
          
          <br />
          <br />
          No início, o serviço oferecido pela empresa era muito limitado, com
          apenas algumas linhas de ônibus e vans cobrindo trechos limitados. No
          entanto, a empresa foi crescendo com o passar dos anos e, em 1990, já
          contava com uma frota de mais de cem veículos, servindo a maioria dos
          bairros da cidade.
          <br />
          <br />
          Atualmente, a Venture Transporte conta com mais de quinhentos
          veículos, incluindo uma frota moderna de ônibus, vans. Além disso, a empresa investiu em novas tecnologias e serviços,
          tais como aplicativos móveis para solicitar passageiros e pagamento
          com cartão de crédito.
          <br />
          <br />
          Além de oferecer seus serviços à população, a Venture Transporte
          também tem procurado se envolver com projetos sociais de forma a
          contribuir para o desenvolvimento da comunidade. Atualmente, a empresa
          patrocina o programa "Crianças na Estrada", que oferece descontos para
          estudantes e idosos nos serviços de transporte.
          <br />
          <br />
          Com o passar dos anos, a Venture Transporte tornou-se uma empresa
          líder no setor de transporte público, oferecendo serviços de qualidade
          para milhões de pessoas. A empresa desenvolveu também um sistema de
          gestão de frotas para melhorar a segurança e a eficiência dos
          serviços. Atualmente, a Venture Transporte é uma das maiores empresas
          de transporte público do país, com uma rede de serviços que abrange a
          maioria dos estados brasileiros. A empresa está comprometida em
          oferecer serviços de qualidade para todos os passageiros, garantindo
          segurança e conforto em cada viagem.
          A Venture Transporte tem sido premiada anualmente como a melhor
          empresa de transporte público da cidade, graças à sua dedicação à
          qualidade dos serviços e à segurança oferecida aos passageiros. A
          empresa tem se consolidado como uma das maiores e mais respeitadas no
          ramo de transportes na região.
          <br />
        </Text>
        <CardValores />
        <Comentarios/>
      </Container>
      <Footer />
    </>
  );
};

export default SobreNos;
