import React, { useState } from "react";
import { Container, ImagePoster, LeftControl, RightControl } from "./style";

const Carrossel = () => {
  const [source, setSource] = useState(
    "https://i.pinimg.com/originals/bd/a5/be/bda5be61177acdb5fd46c3219f8b81a0.jpg"
  );
  const [index, setIndex] = useState<number>(0);
  const images = [
    "https://i.pinimg.com/originals/bd/a5/be/bda5be61177acdb5fd46c3219f8b81a0.jpg",
    "https://cdn.stocksnap.io/img-thumbs/960w/passenger-vehicle_06H84R1IBB.jpg",
    "https://www.10wallpaper.com/wallpaper/3840x2160/1803/Astronaut_stars_space_galaxy_4K_HD_3840x2160.jpg",
    "https://static.vecteezy.com/ti/fotos-gratis/p2/1235937-4k-uhd-ilustrado-espaco-triangulos-gratis-foto.jpg",
    "https://wallpaperaccess.com/full/361074.jpg",
  ];

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
