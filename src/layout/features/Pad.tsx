import React from "react";

export const Pad = () => {
  return (
    <div>
        <div>
          <button className="Input-button">MR</button>
          <button className="Input-button">MC</button>
          <button className="Input-button">M+</button>
          <button className="Input-button">M-</button>
        </div>
        <div>
          <button className="AC-button">AC</button>
          <button className="Input-button">C</button>
          <button className="Input-button">-/+</button>
          <button className="Input-button">÷</button>
        </div>
        <div>
          <button className="Input-button">7</button>
          <button className="Input-button">8</button>
          <button className="Input-button">9</button>
          <button className="Input-button">x</button>
        </div>
        <div>
          <button className="Input-button">4</button>
          <button className="Input-button">5</button>
          <button className="Input-button">6</button>
          <button className="Input-button">-</button>
        </div>
        <div>

          <button className="Input-button">1</button>
          <button className="Input-button">2</button>
          <button className="Input-button">3</button>
          <button className="Input-button">+</button>
        </div>
        <div>
          <button className="Input-button">0</button>
          <button className="Input-button">.</button>

          <button className="Equal-button">=</button>
        </div>
      </div>
  );
};

export default Pad;
