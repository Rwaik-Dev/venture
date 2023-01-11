import styled from "styled-components";

interface ImagePosterProps{
  sourceBackgroundImage: string;
}

export const Container = styled.div`
  height: 650px;
  width: 100%;
  margin-top: 20px;
`;
export const ImagePoster = styled.div<ImagePosterProps>`
  height: 100%;
  width: 100% ;
  display: flex ;
  justify-content: space-between;
  background-size: 100% 100%;
  /* background-repeat: no-repeat; Colocar na responsividade quando a tela for menos que 1024px */
  background-image:url(${(props) => props.sourceBackgroundImage}) ;
`;

export const LeftControl = styled.div`
  width: 30% ;
  height: 100% ;
`
export const RightControl = styled.div`
  width: 30% ;
  height: 100% ;

`
