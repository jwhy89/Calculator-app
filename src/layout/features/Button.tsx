import React, { FunctionComponent } from "react";

interface ButtonProps {
  className?: object;
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