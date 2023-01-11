import React, { useState } from "react";
import { Container, CenterCarosel, DivImage, Image } from "./style";

const Carrossel = () => {
  const [translateValue, setTranslateValue] = useState("0%");

  const currentTranslateValue = translateValue;

  setInterval(function () {
    switch (currentTranslateValue) {
      case "0%":
          console.log("Mudou pra 2")
          setTranslateValue("-100%")
        break;
      case "-100%":
        console.log("Mudou pra 3")
        setTranslateValue("-200%")
        break;
      case "-200%":
        console.log("Mudou pra 1")
        setTranslateValue("0%")
        break;
      default:
        console.log("Voltou pra 1")
        setTranslateValue("0%")
        break;
    }
  }, 7000);

  return (
    <Container>
      <CenterCarosel>
        <DivImage
          translateXValue={translateValue}
        >
          Div 1
        </DivImage>
        <DivImage
          translateXValue={translateValue}
        >
          Div 2
        </DivImage>
        <DivImage
          translateXValue={translateValue}
        >
          Div 3
        </DivImage>
      </CenterCarosel>
    </Container>
  );
};

export default Carrossel;
