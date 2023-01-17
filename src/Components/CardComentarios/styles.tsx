import styled from "styled-components";

export const Card = styled.div`
  width: 300px;
  height: 350px;
  padding: 3px;
  margin: 1%;
  border-radius: 6px;
  transition: border-radius 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(190, 190, 190),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
`;
export const ImageCard = styled.div`
  height: 60%;
  width: 100%;
  border-radius: 6px 6px 0 0;
  background-color: rgb(236, 236, 236);
  display: flex;
  justify-content: center;
`;
export const Coment = styled.p`
  height: 35%;
  width: 100%;
  font-size: 15px;
`;
export const ComentBy = styled.p`
  width: 100%;
  height: 5%;
`;
export const Author = styled.p`
  font-size: 14px;
  padding-left: 5px;
  color: #555454;
`;
export const NameAuthor = styled.span`
  padding: 0 5px;
  font-weight: bold;
  color: #424242;
`;
