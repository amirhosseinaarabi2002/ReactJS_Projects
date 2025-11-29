import React from "react";

const Button = ({ label, id, clickHandler, children }) => {
  return (
    <button id={id} onClick={clickHandler}>
      {/* {label} */}
      {children}
    </button>
  );
};

export default Button;
