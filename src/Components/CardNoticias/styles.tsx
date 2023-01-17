import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  height: 300px;
  display: flex;
  margin-top: 50px;
  flex-direction: row;
  margin-bottom: 10px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  border-radius: 10px ;
`;
export const Divisor = styled.div`
  height: 100%;
`;
export const Image = styled.img`
  min-width: 20%;
  padding-bottom: 3px ;
  border-radius: 10px 0px 0px 10px ;
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
  padding: 0 calc(100% - 98%) ;

`;
