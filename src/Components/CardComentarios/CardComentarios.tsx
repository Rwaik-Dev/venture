import React from "react";
import {
  Card,
  Author,
  Coment,
  ComentBy,
  ImageCard,
  NameAuthor,
} from "./styles";
import { UserWoman, UserMan } from "../../Midea/Icons/Icons";

interface ICardComentariosProps {
  sexo: string;
  comentario: string;
  nomeAutor: string;
  dias: number
}

const CardComentarios: React.FC<ICardComentariosProps> = ({
  sexo,
  comentario,
  nomeAutor,
  dias
}) => {
  return (
    <Card>
      <ImageCard>
        {sexo === "masculino" ? (
          <UserMan width="200px" height="200px" />
        ) : (
          <UserWoman width="200px" height="200px" />
        )}
      </ImageCard>
      <Coment>{comentario}</Coment>
      <ComentBy>
        <Author>
          Por:
          <NameAuthor>{nomeAutor}</NameAuthor>
          há {dias} dias atrás
        </Author>
      </ComentBy>
    </Card>
  );
};

export default CardComentarios;
