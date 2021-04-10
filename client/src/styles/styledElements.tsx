import styled from "styled-components";
import { INPUT_BORDER, INPUT_PLACEHOLDER, BUTTON_COLOR } from "./colors";

export const StyledHeading = styled.h2`
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  text-align: center;
`;

export const StyledWrapper = styled.div`
  max-width: 515px;
  margin: 0 auto;
  margin-top: 50px;
`;

export const StyledInput = styled.input`
  border: 1px solid ${INPUT_BORDER};
  height: 35px;
  width: 100%;
  padding-left: 10px;
  margin-bottom: 20px;
  outline: none;

  &::placeholder {
    color: ${INPUT_PLACEHOLDER};
    opacity: 0.5;
  }
`;

export const StyledButton = styled.button`
  background-color: ${BUTTON_COLOR};
  color: white;
  outline: none;
  border: none;
  border-radius: 3px;
  padding: 12px 32px;
  position: relative;
  top: 0;
  transition: top ease 0.2s;
  font-family: inherit;
  font-weight: 500;
  font-size: 16px;
  width: 130px;
  margin-top: 10px;

  &:hover {
    top: -2px;
    cursor: pointer;
  }
`;

export const InputContainer = styled.div`
  margin: 0 auto;
  width: 389px;
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
