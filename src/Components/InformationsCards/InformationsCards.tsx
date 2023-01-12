import React from "react";
import Cards from "../Cards/Cards";
import { Container } from "./styles";
import {dataCards} from "../../Data/data"


const InformationsCards = () => {
  return <Container>
    <Cards sourceImage={dataCards[0].img} textInformation={dataCards[0].textInformation} title={dataCards[0].title} />
    <Cards sourceImage={dataCards[1].img} textInformation={dataCards[1].textInformation} title={dataCards[1].title} />
    <Cards sourceImage={dataCards[2].img} textInformation={dataCards[2].textInformation} title={dataCards[2].title} />
    <Cards sourceImage={dataCards[3].img} textInformation={dataCards[3].textInformation} title={dataCards[3].title} />
  </Container>;
};

export default InformationsCards;
