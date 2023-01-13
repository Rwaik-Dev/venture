import styled from "styled-components";

export const Container = styled.div`
  width: 99%;
  display: flex;
  gap: 5%;
  margin: 25px 10px;
  padding: 10px;
  border-radius: 20px;
  background: rgb(236, 236, 236);
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`;
export const StatusCard = styled.div`
  width: calc(90% / 4);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Name = styled.h2`
  margin: 8px 0;
  width: 100%;
  text-transform: uppercase;
  font-size: 18px;
  text-align: center;
  font-weight: bold;
`;
export const SmallDescription = styled.small`
  font-size: 15px;
  padding: 0 8px;
  text-align: justify;
`;
