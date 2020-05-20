import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Button from "../features/Button";
import { Digit, Operator } from "../app/models/types";

interface PadProps {
  onDigitButtonClick: (digit: Digit) => void;
  onOperatorButtonClick: (operator: Operator) => void;
}

const StyledPad = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 1fr;
`;

export const Pad: FunctionComponent<PadProps> = ({ onDigitButtonClick, onOperatorButtonClick, }) => {
  return (
    <StyledPad>
      <Button>MR</Button>
      <Button>MC</Button>
      <Button>M+</Button>
      <Button>M-</Button>
      <Button color="red">AC</Button>
      <Button>C</Button>
      <Button>-/+</Button>
      <Button color="dark" onClick={() => onOperatorButtonClick('÷')}>÷</Button>
      <Button onClick={() => onDigitButtonClick(7)}>7</Button>
      <Button onClick={() => onDigitButtonClick(8)}>8</Button>
      <Button onClick={() => onDigitButtonClick(9)}>9</Button>
      <Button color="dark" onClick={() => onOperatorButtonClick('×')}>×</Button>
      <Button onClick={() => onDigitButtonClick(4)}>4</Button>
      <Button onClick={() => onDigitButtonClick(5)}>5</Button>
      <Button onClick={() => onDigitButtonClick(6)}>6</Button>
      <Button color="dark" onClick={() => onOperatorButtonClick('-')}>-</Button>
      <Button onClick={() => onDigitButtonClick(1)}>1</Button>
      <Button onClick={() => onDigitButtonClick(2)}>2</Button>
      <Button onClick={() => onDigitButtonClick(3)}>3</Button>
      <Button color="dark" onClick={() => onOperatorButtonClick('+')}>+</Button>
      <Button onClick={() => onDigitButtonClick(0)}>0</Button>
      <Button>.</Button>
      <Button color="green" isLarge={true}>
        =
      </Button>
    </StyledPad>
  );
};

export default Pad;
