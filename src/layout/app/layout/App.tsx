import React, { FunctionComponent, useState, useEffect } from "react";
import "./App.css";
import Pad from "../../features/Pad";
import Display from "../../features/Display";
import { Digit, Operator } from "../models/types";
import { getCalculations, postCalculation } from "../api/api";

const doMath = (firstValue: number, secondValue: number, operator: string) =>
  ({
    "+": () => (firstValue += secondValue),
    "-": () => (firstValue -= secondValue),
    "×": () => (firstValue *= secondValue),
    "÷": () => (secondValue === 0 ? 0 : (firstValue /= secondValue)),
  }[operator]());

export const App: FunctionComponent = () => {
  const [display, setDisplay] = useState<string>("0");
  const [result, setResult] = useState<number>(0);
  const [waitingForOperand, setWaitingForOperand] = useState<boolean>(true);
  const [pendingOperator, setPendingOperator] = useState<Operator|undefined>(undefined);
  const [memory, setMemory] = useState<number>(0);
  const [calculations, setCalculations] = useState<any>("Loading...");

  useEffect(() => {
    getCalculations()
      .then((calculations) => setCalculations(calculations))
      .catch(() => setCalculations("Failed to load"));
  }, []);

  //Handles Calculations
  const calculate = (
    rightOperand: number,
    pendingOperator: Operator
  ): void => {
    let newResult = doMath(result, rightOperand, pendingOperator);
    postCalculation({
      valueOne: result,
      valueTwo: rightOperand,
      operatorAction: pendingOperator,
      result: newResult
    });
    setResult(newResult);
    // Display "ERROR" when /0
    if (pendingOperator === "÷" && rightOperand === 0) {
      setDisplay("ERROR");
    } else {
      setDisplay(newResult.toString().slice(0, 12)); // TODO 
    }
  };

  const convertToNumberWithCheckIfNaN = (display: string) => {
    if (Number.isNaN(Number(display))) {
      display = "0";
    }
    return Number(display);
  }; // Handling display="ERROR"


  const buttonClickHandlerProps = {
    onDigitClick(digit: Digit) {
      let newDisplay = display;
      if ((display === "0" && digit === 0) || display.length > 12) {
        return;
      }
      if (waitingForOperand) {
        newDisplay = "";
        setWaitingForOperand(false);
      }
      if (display !== "0") {
        newDisplay = newDisplay + digit.toString();
      } else {
        newDisplay = digit.toString();
      }
      setDisplay(newDisplay);
    },

    onOperatorClick(operator: Operator) {
      const operand = Number(display);

      if (pendingOperator !== undefined && !waitingForOperand) {
        calculate(operand, pendingOperator);
      } else {
        setResult(operand);
      }

      setPendingOperator(operator);
      setWaitingForOperand(true);
    },

    onEqualClick() {
      const operand = convertToNumberWithCheckIfNaN(display);
      if (pendingOperator !== undefined && !waitingForOperand) {
        calculate(operand, pendingOperator);
        setPendingOperator(undefined);
      } else {
        setDisplay(operand.toString());
      }
      setResult(operand);
      setWaitingForOperand(true);
    },

    onAllClearClick() {
      setResult(0);
      setPendingOperator(undefined);
      setDisplay("0");
      setWaitingForOperand(true);
    },

    onClearEntryClick() {
      setDisplay("0");
      setWaitingForOperand(true);
    },

    onMemoryRecallClick() {
      setDisplay(memory.toString());
      setWaitingForOperand(true);
    },

    onMemoryClearClick() {
      setMemory(0);
      setWaitingForOperand(true);
    },

    onMemoryPlusClick() {
      setMemory(memory + Number(display));
      setWaitingForOperand(true);
    },

    onMemoryMinusClick() {
      setMemory(memory - Number(display));
      setWaitingForOperand(true);
    },

    onDecimalClick() {
      let newDisplay = display;
      if (waitingForOperand) {
        newDisplay = "0";
      }
      if (newDisplay.indexOf(".") === -1) {
        newDisplay = newDisplay + ".";
      }
      setDisplay(newDisplay);
      setWaitingForOperand(false);
    },

    onChangeSignClick() {
      const value = Number(display);

      if (value > 0) {
        setDisplay("-" + display);
      } else if (value < 0) {
        setDisplay(display.slice(1));
      }
    }
  };

  return (
    <div>
      <header className="App-header">
        <p>Calculator</p>
        <Display
          value={display}
          hasMemory={memory !== 0}
          expression={
            pendingOperator !== undefined
              ? `${result}${pendingOperator}${waitingForOperand ? "" : display}`
              : ""
          }
        />
        <Pad {...buttonClickHandlerProps} />
        <p>Calculations</p>
        <Calculations calculations={calculations} />
      </header>
    </div>
  );
};

export default App;

function Calculations({ calculations }) {
  if (typeof calculations === "string") {
    return <p>{calculations}</p>;
  }
  return (
    <div className="calculations">
    </div>
  );
}
