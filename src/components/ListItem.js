import React from "react";

export default function ListItem(props) {
  return (
    <div
      className="list-item"
      style={{ backgroundColor: props.isActive ? "#40a2e3" : "transparent" }}
      onClick={props.onClick}
      id={props.uniqueID}
    >
      <p>{props.title}</p>
    </div>
  );
}
