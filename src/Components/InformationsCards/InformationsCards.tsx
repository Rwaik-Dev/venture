import React from "react";
import Cards from "../Cards/Cards";
import { Container } from "./styles";
import { dataCards } from "../../Data/data";
import { Clock, Marker, Ticket, WaitingTime } from "../../Midea/Icons/Icons";

const InformationsCards = () => {
  return (
    <Container>
      <Cards textInformation={dataCards[0].textInformation} title={dataCards[0].title}>
        <WaitingTime height="100%" width="100%" />
      </Cards>
      <Cards textInformation={dataCards[1].textInformation} title={dataCards[1].title}>
        <Clock height="100%" width="100%" />
      </Cards>
      <Cards textInformation={dataCards[2].textInformation} title={dataCards[2].title}>
        <Marker height="100%" width="100%" />
      </Cards>
      <Cards textInformation={dataCards[3].textInformation} title={dataCards[3].title}>
        <Ticket height="100%" width="100%" />
      </Cards>
    </Container>
  );
};

export default InformationsCards;
