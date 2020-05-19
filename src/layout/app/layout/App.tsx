import React from "react";
import "./App.css";
import Pad from "../../features/Pad";
import Display from '../../features/Display';

const App = () => {
  return (
    <div>
      <header className="App-header">
      <p>Calculator</p>
      <Display value="123" hasMemory={true} operator="+" />
        <Pad />
        <p>Calculations</p>
      </header>
    </div>
  );
};

export default App;
