import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
`;
export const Divider = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const DivImage = styled.div`
  height: 100%;
  width: 50%;
`;

export const Button = styled.button`
  width: 100px;
  height: 40px;
  background: none;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  &:hover {
    color: #fff;
    background-color: #1449b4;
    transition: all 0.3s;
  }
`;
