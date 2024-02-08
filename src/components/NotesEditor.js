import React from "react";
import TitleField from "./TitleField";
import BodyField from "./BodyField";
import CustomButton from "./CustomButton";

export default function NotesEditor(props) {
  return (
    <div className="notes-editor">
      <TitleField title={props.title} onTitleChange={props.onNoteChange} />
      <BodyField body={props.body} onBodyChange={props.onNoteChange} />
      <div>
        <CustomButton
          text="Delete"
          backgroundColor="red"
          onClick={props.onNoteDelete}
        />
      </div>
    </div>
  );
}
