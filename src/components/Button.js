import React from "react";

const Button = ({ children, color, type, handleClick, extraClasses }) => {
    let colors;
  switch (color) {
    case "primary":
      colors = "bg-blue-500 hover:bg-blue-600";
      break;
    case "success":
      colors = "bg-green-500 hover:bg-green-600";
      break;
    case "warning":
      colors = "bg-yellow-300 hover:bg-yellow-400 text-black";
      break;
    case "secondary":
      colors = "bg-pink-500 hover:bg-pink-600";
      break;
    default:
      colors = "bg-red-500 hover:bg-red-600";
  }

  const classes = `rounded text-white py-2 px-4 ${colors} ${extraClasses}`
  return <button onClick={handleClick} className={classes} type={type}>
      {children}
  </button>;
};

export default Button;
