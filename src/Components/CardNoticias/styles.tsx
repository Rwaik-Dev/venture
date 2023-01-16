import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  margin-top: 50px;
  flex-direction: row;
  margin-bottom: 10px;
  border: solid 1px;
`;
export const Divisor = styled.div`
  height: 100%;
`;
export const Image = styled.img`
  min-width: 20%;
`;
export const Title = styled.h4`
  width: 100%;
  padding-left: calc(100% - 98%) ;
  font-size: 20px ;
  margin-bottom: 10px  ;
`;
export const Text = styled.p`
  width: 100%;
  
  text-align: justify ;
  padding-left: calc(100% - 98%) ;

`;
