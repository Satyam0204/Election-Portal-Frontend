import { Button as NextUIButton } from "@nextui-org/react";
import React from "react";

const Button = ({ children, onClick, className, ...props }) => {
  return (
    <NextUIButton
      onClick={onClick}
      className={` bg-btn-primary text-white py-4 px-8 rounded-xl text-xl   ${className}`}
      {...props}
    >
      {children}
    </NextUIButton>
  );
};

export default Button;
