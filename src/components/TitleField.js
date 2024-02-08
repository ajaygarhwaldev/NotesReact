import React from "react";

export default function TitleField(props) {
  function HandleTitleChange(event) {
    props.onTitleChange(event);
  }

  return (
    <input
      placeholder="Title here"
      className="title-field"
      value={props.title}
      onChange={HandleTitleChange}
      name="titleInput"
    />
  );
}
