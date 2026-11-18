
import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

const Button = ({
  children,
  to,
  href,
  onClick,
  variant = "primary",
  size = "medium",
  type = "button",
  className = "",
  disabled = false,
  ...props
}) => {
  const classes = [
    "global-btn",
    `btn-${variant}`,
    `btn-${size}`,
    className
  ]
    .filter(Boolean)
    .join(" ");

  // Internal navigation
  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  // External link
  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...props}
      >
        {children}
      </a>
    );
  }

  // Normal button
  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
