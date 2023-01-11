import React, { useState } from "react";
import { Container, ImagePoster, LeftControl, RightControl } from "./style";

const Carrossel = () => {
  const [source, setSource] = useState(
    "https://i.pinimg.com/originals/bd/a5/be/bda5be61177acdb5fd46c3219f8b81a0.jpg"
  );
  const [index, setIndex] = useState<number>(0);
  const images = [
    "https://i.pinimg.com/originals/bd/a5/be/bda5be61177acdb5fd46c3219f8b81a0.jpg",
    "http://static1.squarespace.com/static/5fe4caeadae61a2f19719512/5fe5c3a9d85eb525301180ed/5ff082ae17af6f5d1930e6bf/1610530333403/Wallpaper+engine+4k.png?format=1500w",
    "https://www.10wallpaper.com/wallpaper/3840x2160/1803/Astronaut_stars_space_galaxy_4K_HD_3840x2160.jpg",
    "https://static.vecteezy.com/ti/fotos-gratis/p2/1235937-4k-uhd-ilustrado-espaco-triangulos-gratis-foto.jpg",
    "https://wallpaperaccess.com/full/361074.jpg",
  ];

  function nextImage() {
    if (images.length - 1 === index) {
      setSource(images[index])
      setIndex(0);
    } else {
      setIndex(index + 1);
      setSource(images[index]);

    }
  }

  function previmage(){
    console.log("Index recebido: " + index)
    setIndex(index - 1)
    console.log("Index Tratado" + index)

    if(index === images.length - 1){
      setSource(images[index])
      setIndex(4)
    }else{
      setSource(images[index - 1])
      setIndex(index - 1)
    }
  }

  return (
    <Container>
      <ImagePoster sourceBackgroundImage={source}>
        <LeftControl onClick={() => previmage()} />
        <RightControl onClick={() => nextImage()} />
      </ImagePoster>
    </Container>
  );
};

export default Carrossel;
