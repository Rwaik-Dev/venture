import React, { ReactNode } from "react";
import { Container, Image, Title, TextInformation } from "./styles";

interface ICardsProps {
  title: string;
  textInformation: string;
  children?: ReactNode
}

const Cards: React.FC<ICardsProps> = ({
  title,
  textInformation,
  children
}) => {
  return (
    <Container>
      <Image>
      {children}
      </Image>
      <Title>{title}</Title>
      <TextInformation>{textInformation}</TextInformation>
    </Container>
  );
};

export default Cards;
