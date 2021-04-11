import React, { Dispatch, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  StyledWrapper,
  StyledHeading,
  StyledInput,
  StyledButton,
  ContentContainer,
  Message,
} from "../../styles/styledElements";
import { RelativeDiv } from "./styled";

interface IProps {
  email: string;
  amount: string;
  setEmail: Dispatch<string>;
  setAmount: Dispatch<string>;
  setInvestorInfoIsUndefined: Dispatch<boolean>;
}

const Step2: React.FC<IProps> = ({
  email,
  amount,
  setEmail,
  setAmount,
  setInvestorInfoIsUndefined,
}) => {
  const [emailIsInvalid, setEmailIsInvalid] = useState(false);
  const [amountIsInvalid, setAmountIsInvalid] = useState(false);
  let history = useHistory();

  const onClick = () => {
    const atposition = email.indexOf("@");
    const dotposition = email.lastIndexOf(".");
    if (
      atposition < 1 ||
      dotposition < atposition + 2 ||
      dotposition + 2 >= email.length
    ) {
      setEmailIsInvalid(true);
      return;
    } else {
      setEmailIsInvalid(false);
    }

    if (isNaN(+amount.replace(",", ".")) || amount === "0") {
      setAmountIsInvalid(true);
      return;
    } else {
      setAmountIsInvalid(false);
    }

    setInvestorInfoIsUndefined(false);
    history.push("/step3");
  };

  return (
    <StyledWrapper>
      <StyledHeading>Step 2</StyledHeading>
      <StyledHeading>Enter your information</StyledHeading>
      <ContentContainer>
        <StyledInput
          type="email"
          name="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          invalid={emailIsInvalid}
        />

        <RelativeDiv>
          <StyledInput
            type="string"
            name="amount"
            placeholder="Investment Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            invalid={amountIsInvalid}
          />
          <span>EUR</span>
        </RelativeDiv>

        <StyledButton onClick={onClick}>Continue</StyledButton>
        {emailIsInvalid || amountIsInvalid ? (
          <Message error={true}>Please enter valid values.</Message>
        ) : null}
      </ContentContainer>
    </StyledWrapper>
  );
};

export default Step2;
