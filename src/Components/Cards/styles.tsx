import styled from "styled-components";

export const Container = styled.div`
  width: 410px;
  height: 400px;
  background-color: #0ec19b;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`;

export const Image = styled.img`
  width: 100%;
  height: 250px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

export const Title = styled.h3`
  width: 100%;
  height: 25px;
  margin-bottom: 5px;
  text-align: center;
  color: #fff;
  font-size: 22px;
  text-transform: uppercase;
`;

export const TextInformation = styled.p`
  color: #fff;
  text-align: justify;
  padding: 0 5px;
`;
