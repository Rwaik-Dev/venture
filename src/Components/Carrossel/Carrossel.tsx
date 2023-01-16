import React, { useState } from "react";
import { Container, ImagePoster, LeftControl, RightControl } from "./style";
import {dataImagesCarrosel as images}  from "../../Data/data" 

const Carrossel = () => {
  const [source, setSource] = useState(images[0]);
  const [index, setIndex] = useState<number>(0);

  function nextImage(currentIndex: number) {
    if (currentIndex === 0) {
      // Verifica se e a primeira imagem e passa pra segunda
      setSource(images[currentIndex + 1]);
      return setIndex(currentIndex + 1);
    }
    if (currentIndex === images.length - 1) {
      // Verifica se e a ultima foto e passa pra primeira
      setSource(images[0]);
      return setIndex(0);
    }
    setSource(images[currentIndex + 1]);
    return setIndex(currentIndex + 1);
  }

  function previmage(currentIndex: number) {
    if (currentIndex === 0) {
      console.log("Voltando pra ultima foto");
      setSource(images[currentIndex + images.length - 1]);
      return setIndex(images.length - 1);
    }
    setSource(images[currentIndex - 1]);
    return setIndex(currentIndex - 1);
  }

  return (
    <Container>
      <ImagePoster sourceBackgroundImage={source}>
        <LeftControl onClick={() => previmage(index)} />
        <RightControl onClick={() => nextImage(index)} />
      </ImagePoster>
    </Container>
  );
};

export default Carrossel;
