import React, { FunctionComponent } from "react";

interface ButtonProps {
  color?: "red" | "green" | "dark";
  isLarge?: boolean;
  onClick?: () => void;
}


const Button: FunctionComponent<ButtonProps> = ({
  children
}) => {
  return <Button>
      {children}
  </Button>;
};

export default Button;