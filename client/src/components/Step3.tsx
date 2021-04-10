import React, { Dispatch } from "react";
import { IProject } from "../App";
import styled from "styled-components";
import {
  StyledWrapper,
  StyledHeading,
  StyledButton,
  InputContainer,
} from "../styles/styledElements";
import { INPUT_PLACEHOLDER, DARK_GREY } from "../styles/colors";

const StyledTableCell = styled.td`
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.5px;
  padding-bottom: 5px;

  &.pale {
    color: ${INPUT_PLACEHOLDER};
    opacity: 0.5;
  }

  &.padding-right {
    padding-right: 20px;
  }
`;

const StyledCheckbox = styled.div`
  margin: 30px 0;
  height: 20px;
  color: ${DARK_GREY};

  input {
    margin-right: 10px;
  }
`;

interface IProps {
  selectedProject: IProject | undefined;
  email: string;
  amount: number | undefined;
  agreed: boolean;
  setAgreed: Dispatch<boolean>;
}

const Step2: React.FC<IProps> = ({
  selectedProject,
  email,
  amount,
  agreed,
  setAgreed,
}) => {
  const onClick = () => {};
  return (
    <StyledWrapper>
      <StyledHeading>Step 3</StyledHeading>
      <StyledHeading>Confirm your information</StyledHeading>
      <InputContainer>
        <table>
          <tbody>
            <tr>
              <StyledTableCell className="padding-right">
                project
              </StyledTableCell>
              <StyledTableCell className="pale">
                {selectedProject && selectedProject.name}
              </StyledTableCell>
            </tr>
            <tr>
              <StyledTableCell className="padding-right">email</StyledTableCell>
              <StyledTableCell className="pale">{email}</StyledTableCell>
            </tr>
            <tr>
              <StyledTableCell className="padding-right">
                amount
              </StyledTableCell>
              <StyledTableCell className="pale">{amount}</StyledTableCell>
            </tr>
          </tbody>
        </table>
        <StyledCheckbox>
          <input
            type="checkbox"
            name="agreed"
            onChange={() => setAgreed(!agreed)}
            checked={agreed}
          />
          <span>I accept the terms and conditions</span>
        </StyledCheckbox>
        <StyledButton onClick={onClick}>Invest</StyledButton>
      </InputContainer>
    </StyledWrapper>
  );
};

export default Step2;
