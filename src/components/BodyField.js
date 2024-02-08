import React from "react";

export default function BodyField(props) {
  function HandleBodyChanges(event) {
    props.onBodyChange(event);
  }

  return (
    <textarea
      placeholder="Body Text here"
      className="body-field"
      value={props.body}
      onChange={HandleBodyChanges}
      name="bodyInput"
    />
  );
}
