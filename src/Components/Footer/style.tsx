import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  background-color: #0ec19b;

  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px;
`;

export const DevInformations = styled.div`
  display: flex;
  width: 100%;
  padding: 0 10px;
  justify-content: space-between;
  align-items: center;
`;

export const Text = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

export const ContactList = styled.div`
  margin-right: 15px;
`;

export const Contacts = styled.div`
  margin-bottom: 5px;
`;

export const Redirect = styled.a`
  display: flex;
  width: 125px;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  color: #000;
`;
