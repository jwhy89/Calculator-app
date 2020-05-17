import React from "react";
import "./App.css";
import Calculator from "../../features/Calculator";

const App = () => {
  return (
    <div>
      <header className="App-header">
        <p>Calculator</p>
        <Calculator />
        <p>Calculations</p>
      </header>
    </div>
  );
};

export default App;
