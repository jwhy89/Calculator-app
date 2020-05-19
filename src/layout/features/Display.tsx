import React, { FunctionComponent } from "react";

interface DisplayProps {
  hasMemory: boolean;
  operator: "+" | "-" | "×" | "÷" | "";
  value: string;
}
const Display: FunctionComponent<DisplayProps> = ({
  value,
  hasMemory,
  operator,
}) => {
  return (
    <div>
      <div className="Display-output">

          <span className="Indicator-list">
            {hasMemory && <span className="Indicator-item">M</span>}

            <span className="Indicator-item">{operator}</span>
          </span>

          <div>{value}</div>
      </div>
    </div>
  );
};

export default Display;
