import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 5%;
  margin: 25px 0;
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
