import React from "react";
import { Container, StatusCard, Name, SmallDescription } from "./styles";
import {
  PeoplesIcons,
  CoinIcon,
  CompanyIcon,
  BusIcon,
} from "../../Midea/Icons/Icons";

const StatusCompany = () => {
  const PREFIX_SIZE = "140px";
  return (
    <Container>
      <StatusCard>
        <BusIcon width={PREFIX_SIZE} height={PREFIX_SIZE} />
        <Name>Frota</Name>
        <SmallDescription>
          A Venture acaba de lançar uma nova frota de ônibus modernos, equipados
          com a mais recente tecnologia para garantir a máxima segurança e
          conforto aos passageiros. Esta nova frota de ônibus oferece aos
          usuários uma viagem segura e confortável, ao mesmo tempo em que reduz
          os custos de operação da empresa.
        </SmallDescription>
      </StatusCard>
      <StatusCard>
        <CompanyIcon width={PREFIX_SIZE} height={PREFIX_SIZE} />
        <Name>Sedes</Name>
        <SmallDescription>
          Com 35 sedes espalhadas por todo o Brasil, a nossa empresa vem
          aprimorando os serviços, atendendo as necessidades dos clientes e
          oferecendo o melhor em qualidade. Nossas sedes estão presentes em
          diversas regiões, como Nordeste, Sudeste, Sul e Centro-Oeste,
          oferecendo as melhores soluções para os nossos parceiros. Estamos
          trabalhando para oferecer os melhores produtos e serviços, com
          excelência e agilidade, para que possamos oferecer sempre a melhor
          experiência.
        </SmallDescription>
      </StatusCard>
      <StatusCard>
        <CoinIcon width={PREFIX_SIZE} height={PREFIX_SIZE} />
        <Name>Investimentos</Name>
        <SmallDescription>
          A Venture tem realizado significativos investimentos para modernizar
          seus serviços nesses últimos anos, ampliando a frota de veículos,
          modernizando a frota de ônibus, aprimorando os processos de serviço,
          oferecendo melhores condições de trabalho aos seus funcionários e,
          acima de tudo, aprimorando a qualidade dos serviços prestados aos seus
          clientes. Com esses investimentos, a Venture tem se tornado referência
          no mercado, conquistando cada vez mais espaço e qualidade.
        </SmallDescription>
      </StatusCard>
      <StatusCard>
        <PeoplesIcons width={PREFIX_SIZE} height={PREFIX_SIZE} />
        <Name>Colaboradores</Name>
        <SmallDescription>
          Na Venture acreditamos que nossos colaboradores são o nosso maior
          patrimônio. Por isso, trabalhamos diariamente para oferecer a eles um
          ambiente de trabalho seguro, motivador e inovador, em que possam
          desenvolver suas habilidades e contribuir para o crescimento da nossa
          empresa. Nossos colaboradores são nossos parceiros, e incentivamos a
          equipe a pensar de forma criativa, colaborativa e ética para que
          possamos alcançar os melhores resultados.
        </SmallDescription>
      </StatusCard>
    </Container>
  );
};

export default StatusCompany;
