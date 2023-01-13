import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding-top: 5px;
  background-color: #0ec19b;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
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
  width: 120px;
  height: 40px;
  background: none;
  border-radius: 5px;
  font-size: 18px;
  border: none;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #1449b4;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    transition: all 0.3s;
  }
`;
