import React, { useState } from "react";
import axios from "axios";
import { IProject } from "../../App";
import { StyledTableCell, StyledCheckbox } from "./styled";
import {
  StyledWrapper,
  StyledHeading,
  StyledButton,
  ContentContainer,
  Message,
} from "../../styles/styledElements";

interface IProps {
  selectedProject: IProject | undefined;
  email: string;
  amount: string;
}

const Step2: React.FC<IProps> = ({ selectedProject, email, amount }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [triedToSubmit, setTriedToSubmit] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [isError, setIsError] = useState(false);

  const onClick = async () => {
    setTriedToSubmit(true);

    if (!agreed) {
      return;
    } else {
      setIsLoading(true);
      try {
        const res = await axios.post("http://localhost:1337/investors", {
          email,
          investment_amount: amount,
          project_id: selectedProject && selectedProject.id,
        });

        if (res.status === 200) {
          setSubmitted(true);

          await axios.post("http://localhost:1337/emailing", {
            to: email,
            amount,
          });
        }
        console.log(res);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
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
          <Message error={true}>
            Please accept the terms and conditions.
          </Message>
        ) : null}
        {submitted ? (
          <Message error={false}>
            Your investment has been submitted. Thank you!
          </Message>
        ) : null}
        {isLoading && !submitted ? (
          <Message error={false}>Loading...</Message>
        ) : null}
        {isError ? (
          <Message error={true}>
            Sorry, an error has occured. Please try again later.
          </Message>
        ) : null}
      </ContentContainer>
    </StyledWrapper>
  );
};

export default Step2;
