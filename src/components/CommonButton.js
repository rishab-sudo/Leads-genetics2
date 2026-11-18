import React from "react";
import Button from "./Button";

/**
 * CommonButton — thin wrapper around the global Button component.
 * Kept for backward-compatibility with any places still importing it.
 */
const CommonButton = ({
  text = "Click Here",
  to = "/",
  onClick,
  type = "button",
  variant = "primary",
  size = "medium",
  className = "",
}) => {
  return (
    <Button
      to={to}
      onClick={onClick}
      type={type}
      variant={variant}
      size={size}
      className={className}
    >
      {text}
    </Button>
  );
};

export default CommonButton;
