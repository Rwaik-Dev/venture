import React from "react";
import { Container, Image, Text, Title, Divisor } from "./styles";

interface ICardNoticiasProps {
  sourceImage: string;
  title: string;
  text: string;
}

const CardNoticias: React.FC<ICardNoticiasProps> = ({
  sourceImage,
  text,
  title,
}) => {
  return (
    <Container>
      <Image src={sourceImage} />
      <Divisor>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </Divisor>
    </Container>
  );
};

export default CardNoticias;
