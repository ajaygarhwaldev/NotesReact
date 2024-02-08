import React from "react";
import ListItem from "./ListItem";
import CustomButton from "./CustomButton";

export default function NotesList(props) {
  return (
    <div className="list-bar">
      <div className="list-title">
        <h1>Notes</h1>
        <CustomButton
          text="Add"
          backgroundColor="#40A2E3"
          onClick={props.onButtonClick}
        />
      </div>
      <div className="item-list">
        {props.notes.map((detail) => {
          return (
            <ListItem
              key={detail.id}
              title={detail.title.substring(0, 40)}
              uniqueID={detail.id}
              isActive={detail.id === props.currentNote}
              onClick={props.onClick}
            />
          );
        })}
      </div>
    </div>
  );
}
