import React, { Dispatch } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import {
  StyledWrapper,
  StyledHeading,
  StyledInput,
  StyledButton,
} from "../styles/styledElements";

const InputContainer = styled.div`
  margin: 0 auto;
  width: 389px;
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface IProps {
  email: string;
  amount: number | undefined;
  setEmail: Dispatch<string>;
  setAmount: Dispatch<number | undefined>;
}

const Step2: React.FC<IProps> = ({ email, amount, setEmail, setAmount }) => {
  let history = useHistory();

  const onClick = () => {
    history.push("/step3");
  };
  return (
    <StyledWrapper>
      <StyledHeading>Step 2</StyledHeading>
      <StyledHeading>Enter your information</StyledHeading>
      <InputContainer>
        <StyledInput
          type="email"
          name="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <StyledInput
          type="number"
          name="amount"
          placeholder="Investment Amount"
          value={amount}
          onChange={(e) => setAmount(+e.target.value)}
        />

        <StyledButton onClick={onClick}>Continue</StyledButton>
      </InputContainer>
    </StyledWrapper>
  );
};

export default Step2;
