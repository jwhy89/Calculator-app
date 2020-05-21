import React, { FunctionComponent, useState } from "react";
import "./App.css";
import Pad from "../../features/Pad";
import Display from "../../features/Display";
import { Digit, Operator } from "../models/types";

export const App: FunctionComponent = () => {
  const [display, setDisplay] = useState<string>("0");
  const [result, setResult] = useState<number>(0);
  const [waitingForOperand, setWaitingForOperand] = useState<boolean>(true);
  const [pendingOperator, setPendingOperator] = useState<Operator>();
  const [memory, setMemory] = useState<number>(0);

  //Handles Calculations
  const calculate = (
    rightOperand: number,
    pendingOperator: Operator
  ): boolean => {
    let newResult = result;
    switch (pendingOperator) {
      case "+":
        newResult += rightOperand;
        break;
      case "-":
        newResult -= rightOperand;
        break;
      case "×":
        newResult *= rightOperand;
        break;
      case "÷":
        if (rightOperand === 0) {
          newResult = 0;
          break;
        }
        newResult /= rightOperand;
        break;
    }
    setResult(newResult);
    // Display "ERROR" when /0
    if (pendingOperator === "÷" && rightOperand === 0) {
      setDisplay("ERROR");
    } else {
      setDisplay(newResult.toString().toString().slice(0, 12));
    }
    return true;
  };// End of Calculate Handler

  const convertToNumberWithCheckIfNaN = (display: string) => {
    if (Number.isNaN(Number(display))) {
      display = "0";
    }
    return Number(display);
  }; // Handling display="ERROR"

  // Button Handlers
  const onDigitButtonClick = (digit: Digit) => {
    let newDisplay = display
    if ((display === '0' && digit === 0) || display.length > 12) {
      return
    }
    if (waitingForOperand) {
      newDisplay = ''
      setWaitingForOperand(false)
    }
    if (display !== '0') {
      newDisplay = newDisplay + digit.toString()
    } else {
      newDisplay = digit.toString()
    }
    setDisplay(newDisplay)
  }; // End of Digit button handler

  const onOperatorButtonClick = (operator: Operator) => {
    const operand = Number(display);

    if (typeof pendingOperator !== "undefined" && !waitingForOperand) {
      if (!calculate(operand, pendingOperator)) {
        return;
      }
    } else {
      setResult(operand);
    }

    setPendingOperator(operator);
    setWaitingForOperand(true);
  }; // End of Operator button handler

  const onEqualButtonClick = () => {
    const operand = convertToNumberWithCheckIfNaN(display);
    if (typeof pendingOperator !== "undefined" && !waitingForOperand) {
      if (!calculate(operand, pendingOperator)) {
        return;
      }
      setPendingOperator(undefined);
    } else {
      setDisplay(operand.toString());
    }
    setResult(operand);
    setWaitingForOperand(true);
  }; // End of Equal button handler

  const onAllClearButtonClick = () => {
    setResult(0);
    setPendingOperator(undefined);
    setDisplay("0");
    setWaitingForOperand(true);
  };

  const onClearEntryButtonClick = () => {
    setDisplay("0");
    setWaitingForOperand(true);
  }; // End of All Clear button handler

  const onMemoryRecallButtonClick = () => {
    setDisplay(memory.toString());
    setWaitingForOperand(true);
  }; // End of Memory Recall Button handler

  const onMemoryClearButtonClick = () => {
    setMemory(0);
    setWaitingForOperand(true);
  }; // End of Memory Clear button handler

  const onMemoryPlusButtonClick = () => {
    setMemory(memory + Number(display));
    setWaitingForOperand(true);
  }; // End of Memory Plus button handler

  const onMemoryMinusButtonClick = () => {
    setMemory(memory - Number(display));
    setWaitingForOperand(true);
  }; // End of Memory Minus button handler

  const onDecimalButtonClick = () => {
    let newDisplay = display;
    if (waitingForOperand) {
      newDisplay = "0";
    }
    if (newDisplay.indexOf(".") === -1) {
      newDisplay = newDisplay + ".";
    }
    setDisplay(newDisplay);
    setWaitingForOperand(false);
  }; // End of Decimal Button handler

  const onChangeSignButtonClick = () => {
    const value = Number(display);

    if (value > 0) {
      setDisplay("-" + display);
    } else if (value < 0) {
      setDisplay(display.slice(1));
    }
  }; // End of OnChange Button Handler

  return (
    <div>
      <header className="App-header">
        <p>Calculator</p>
        <Display
          value={display}
          hasMemory={memory !== 0}
          expression={
            typeof pendingOperator !== "undefined"
              ? `${result}${pendingOperator}${waitingForOperand ? "" : display}`
              : ""
          }
        />
        <Pad
          onDigitButtonClick={onDigitButtonClick}
          onOperatorButtonClick={onOperatorButtonClick}
          onEqualButtonClick={onEqualButtonClick}
          onAllClearButtonClick={onAllClearButtonClick}
          onClearEntryButtonClick={onClearEntryButtonClick}
          onMemoryRecallButtonClick={onMemoryRecallButtonClick}
          onMemoryClearButtonClick={onMemoryClearButtonClick}
          onMemoryPlusButtonClick={onMemoryPlusButtonClick}
          onMemoryMinusButtonClick={onMemoryMinusButtonClick}
          onDecimalButtonClick={onDecimalButtonClick}
          onChangeSignButtonClick={onChangeSignButtonClick}
        />
        <p>Calculations</p>
      </header>
    </div>
  );
};

export default App;
