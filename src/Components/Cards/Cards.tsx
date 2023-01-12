import React from "react";
import { Container, Image, Title, TextInformation } from "./styles";

interface ICardsProps{
  sourceImage: string;
  title: string;
  textInformation: string
}

const Cards:React.FC<ICardsProps> = ({sourceImage, title, textInformation}) => {
  return (
  <Container>
    <Image src={sourceImage}/>
    <Title>{title}</Title>
    <TextInformation>{textInformation}</TextInformation>
  </Container>);
};

export default Cards;
