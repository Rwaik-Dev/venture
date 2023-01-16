import styled from "styled-components";

export const Container = styled.form`
  width: 50%;
  display: flex;
  margin: 25px 0px 100px 0px;
  flex-direction: column;
  padding: 1%;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`;

export const InputsForm = styled.input`
  width: 550px;
  height: 35px;
  padding-left: 5px;
  border-radius: 5px;
  margin-bottom: 10px;
  background: #f9f8ff;
  -webkit-box-shadow: inset 0px 0px 5px 1px rgba(120, 120, 120, 1);
  -moz-box-shadow: inset 0px 0px 5px 1px rgba(120, 120, 120, 1);
  box-shadow: inset 0px 0px 5px 1px rgba(120, 120, 120, 1);
`;

export const LabelForm = styled.label`
  font-size: 14px;
  margin-bottom: 4px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const TextAreaForm = styled.textarea`
  max-width: 100%;
  background: #f9f8ff;
  resize: none;
  border-radius: 5px;
  padding: 8px;
  font-size: 16px;
  box-shadow: inset 0px 0px 5px 1px rgba(120, 120, 120, 1);
  -webkit-box-shadow: inset 0px 0px 5px 1px rgba(120, 120, 120, 1);
  -moz-box-shadow: inset 0px 0px 5px 1px rgba(120, 120, 120, 1);
`;
export const SelectForm = styled.select`
  width: 550px;
  height: 40px;
  margin-bottom: 10px;
  font-size: 16px;
  padding-left: 5px;
  background: #f9f8ff;
  border: none;
  box-shadow: inset 0px 0px 5px 1px rgba(120, 120, 120, 1);
  -webkit-box-shadow: inset 0px 0px 5px 1px rgba(120, 120, 120, 1);
  -moz-box-shadow: inset 0px 0px 5px 1px rgba(120, 120, 120, 1);
`;

export const OptionsForm = styled.option``;

export const ButtonForm = styled.button`
  width: 70%;
  height: 40px;
  background-color: #0ec19b;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  margin: 18px 0;
  margin-left: 15%;
`;
