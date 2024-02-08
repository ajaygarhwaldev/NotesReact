import React from "react";

export default function CustomButton(props) {
  return (
    <button
      className="custom-button"
      style={{ backgroundColor: props.backgroundColor }}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}
