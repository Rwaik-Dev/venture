import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 12px;
  align-items: center;
  display: flex;
  flex-direction: column;
`;
export const Content = styled.div`
  width: 100%;
  margin: 20px 0;
  display: flex;
  border-radius: 10px;
  background: rgb(236, 236, 236);

  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`;
export const Image = styled.img`
  width: 30%;
  padding: 10px;
`;
export const Separator = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
`;
export const TitleContent = styled.h3`
  padding: 10px;
  width: 100%;
  font-size: 27px;
  text-align: center;
  text-transform: uppercase;
`;
export const TextContent = styled.p`
  padding: 10px;
  width: 100%;
  font-size: 18px;
  text-align: justify;
`;
