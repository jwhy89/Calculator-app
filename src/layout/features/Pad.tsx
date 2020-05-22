import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Button from "../features/Button";
import { Digit, Operator } from "../app/models/types";

interface PadProps {
  onDigitClick: (digit: Digit) => void;
  onOperatorClick: (operator: Operator) => void;
  onEqualClick: () => void;
  onAllClearClick: () => void;
  onClearEntryClick: () => void;
  onMemoryRecallClick: () => void;
  onMemoryClearClick: () => void;
  onMemoryPlusClick: () => void;
  onMemoryMinusClick: () => void;
  onDecimalClick: () => void;
  onChangeSignClick: () => void;
}

const StyledPad = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 1fr;
`;

export const Pad: FunctionComponent<PadProps> = ({
  onDigitClick,
  onOperatorClick,
  onEqualClick,
  onAllClearClick,
  onClearEntryClick,
  onMemoryRecallClick,
  onMemoryClearClick,
  onMemoryPlusClick,
  onMemoryMinusClick,
  onDecimalClick,
  onChangeSignClick
}) => {
  return (
    <StyledPad>
      <Button onClick={onMemoryRecallClick}>MR</Button>
      <Button onClick={onMemoryClearClick}>MC</Button>
      <Button onClick={onMemoryPlusClick}>M+</Button>
      <Button onClick={onMemoryMinusClick}>M-</Button>
      <Button color="red" onClick={onAllClearClick}>AC</Button>
      <Button onClick={onClearEntryClick}>C</Button>
      <Button onClick={onChangeSignClick}>-/+</Button>
      <Button color="dark" onClick={() => onOperatorClick("÷")}>
        ÷
      </Button>
      <Button onClick={() => onDigitClick(7)}>7</Button>
      <Button onClick={() => onDigitClick(8)}>8</Button>
      <Button onClick={() => onDigitClick(9)}>9</Button>
      <Button color="dark" onClick={() => onOperatorClick("×")}>
        ×
      </Button>
      <Button onClick={() => onDigitClick(4)}>4</Button>
      <Button onClick={() => onDigitClick(5)}>5</Button>
      <Button onClick={() => onDigitClick(6)}>6</Button>
      <Button color="dark" onClick={() => onOperatorClick("-")}>
        -
      </Button>
      <Button onClick={() => onDigitClick(1)}>1</Button>
      <Button onClick={() => onDigitClick(2)}>2</Button>
      <Button onClick={() => onDigitClick(3)}>3</Button>
      <Button color="dark" onClick={() => onOperatorClick("+")}>
        +
      </Button>
      <Button onClick={() => onDigitClick(0)}>0</Button>
      <Button onClick={onDecimalClick}>.</Button>
      <Button color="green" isLarge={true} onClick={onEqualClick}>
        =
      </Button>
    </StyledPad>
  );
};

export default Pad;
