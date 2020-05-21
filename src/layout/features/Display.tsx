import React, { FunctionComponent } from "react";

interface DisplayProps {
  hasMemory: boolean;
  expression: string;
  value: string;
}
export const Display: FunctionComponent<DisplayProps> = ({
  value,
  hasMemory,
  expression,
}) => {
  return (
    <div>
      <div className="Display-output">
        <span className="Indicator-list">
          {hasMemory && <span>M</span>}
          <span className="Indicator-item">{expression}</span>
        </span>

        <div className="Value-display">{value}</div>
      </div>
    </div>
  );
};

export default Display;
