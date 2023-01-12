import styled from "styled-components";

export const Container = styled.div`
  width: 410px;
  height: 400px;
  background-color: #008DE2;
  border-radius: 10px ;
  &:hover:not(:hover){
    opacity: 0.3 ;
  }
  &:hover{
    transition: 0.5s ease-in-out ;
    scale: 1.1 ;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 250px;
  border-top-right-radius: 10px ;
  border-top-left-radius: 10px ;

`;

export const Title = styled.h3`
  width: 100%;
  height: 25px;
  margin-bottom: 5px ;
  text-align: center;
  color: #fff;
  font-size: 22px ;
  text-transform: uppercase ;
`;

export const TextInformation = styled.p`
  color: #fff;
  text-align:justify;
  padding: 0 5px 
`;
