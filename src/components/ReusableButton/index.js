import React from "react";

const CustomBtn = (props) => {
  const { onClick, text } = props;

  return <button onClick={onClick}>{text}</button>;
};

export default CustomBtn;
