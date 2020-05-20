import React, { FunctionComponent, useState } from "react";
import "./App.css";
import Pad from "../../features/Pad";
import Display from "../../features/Display";
import { Digit, Operator } from "../models/types";

export const App: FunctionComponent = () => {
  const [display, setDisplay] = useState<string>("0");

  const onDigitButtonClick = (digit: Digit) => {
    let newDisplay = display

    if ((display === '0' && digit === 0) || display.length > 12) {
      return
    }
    if (display !== '0') {
      newDisplay = newDisplay + digit.toString()
    } else {
      newDisplay = digit.toString()
    }

    setDisplay(newDisplay)
  }
  return (
    <div>
      <header className="App-header">
        <p>Calculator</p>
        <Display value="123" hasMemory={true} operator="+" />
        <Pad onDigitButtonClick={onDigitButtonClick} />
        <p>Calculations</p>
      </header>
    </div>
  );
};

export default App;
