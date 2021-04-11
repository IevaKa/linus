import React, { useState, Dispatch } from "react";
import { IProject } from "../../App";
import { StyledTableCell, StyledCheckbox } from "./styled";
import {
  StyledWrapper,
  StyledHeading,
  StyledButton,
  ContentContainer,
  ErrorMessage,
} from "../../styles/styledElements";

interface IProps {
  selectedProject: IProject | undefined;
  email: string;
  amount: string;
  agreed: boolean;
  setAgreed: Dispatch<boolean>;
  submit: any;
}

const Step2: React.FC<IProps> = ({
  selectedProject,
  email,
  amount,
  agreed,
  setAgreed,
  submit,
}) => {
  const [triedToSubmit, setTriedToSubmit] = useState(false);
  const onClick = () => {
    setTriedToSubmit(true);

    if (!agreed) {
      return;
    } else {
      submit();
    }
  };
  return (
    <StyledWrapper>
      <StyledHeading>Step 3</StyledHeading>
      <StyledHeading>Confirm your information</StyledHeading>
      <ContentContainer>
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
        {triedToSubmit && !agreed ? (
          <ErrorMessage>Please accept the terms and conditions.</ErrorMessage>
        ) : null}
      </ContentContainer>
    </StyledWrapper>
  );
};

export default Step2;
