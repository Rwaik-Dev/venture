import styled from "styled-components";
import { useState } from "react";

interface DivImageProps{
  translateXValue: string
}

export const Container = styled.div`
  height: 650px;
  width: 100%;
  margin-top: 20px;
`;
export const CenterCarosel = styled.div`
  height: 650px;
  display: flex ;
  flex-direction: column ;
  flex-wrap:wrap ;
  overflow-x: hidden ;
  border: solid 1px red;
`;

export const DivImage = styled.div<DivImageProps>`
  width: 100vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: bold;
  transform: translateX(${(props) => props.translateXValue});
  transition: transform ease-out 0.45s ;
  border: solid 1px;
`;

export const Image = styled.img`
  border: solid 1px blue;
`;
