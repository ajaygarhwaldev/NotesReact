import "./App.css";
import React from "react";
import NotesList from "./components/NotesList";
import NotesEditor from "./components/NotesEditor";
import EmptyNotes from "./components/EmptyNotesScreen";
import Title from "./data/default";

function App() {
  const [notes, setNotes] = React.useState([]);
  const [currentNote, setCurrentNote] = React.useState(
    notes.length > 0 ? 0 : null
  );
  var notesAvilable = notes.length > 0;

  // Handling Add Button here
  function AddToNotes() {
    setNotes((prevValue) => {
      setCurrentNote(prevValue.length);
      return [
        ...prevValue,
        {
          title: Title[Math.trunc(Math.random() * 20)],
          body: "",
          id: prevValue.length,
        },
      ];
    });
  }

  // Handling Notes Change here
  function UpdateNotes(event) {
    setNotes((prevValue) => {
      return prevValue.map((note, index) => {
        if (index === currentNote) {
          if (event.target.name === "titleInput") {
            return {
              ...note,
              title: event.target.value,
              body: prevValue[currentNote].body,
            };
          } else if (event.target.name === "bodyInput") {
            return {
              ...note,
              title: prevValue[currentNote].title,
              body: event.target.value,
            };
          }
        }
        return note;
      });
    });
  }

  // Deleting Note here
  function DeleteNote() {
    setNotes((prevNotes) => {
      const updatedNotes = prevNotes.filter(
        (note, index) => index !== currentNote
      );

      // Update the id of each note to reflect its new position
      updatedNotes.forEach((note, index) => {
        note.id = index;
      });

      let newCurrentNote = currentNote;
      if (currentNote === prevNotes.length - 1) {
        newCurrentNote = currentNote - 1; // Update currentNote to the previous one
      }
      setCurrentNote(newCurrentNote);
      return updatedNotes;
    });
  }

  // Switching Notes here

  function SwitchingNotesHere(event) {
    setCurrentNote(Number(event.currentTarget.id));
  }

  return (
    <div className="notes-window">
      <NotesList
        notes={notes}
        currentNote={currentNote}
        onButtonClick={AddToNotes}
        onClick={SwitchingNotesHere}
      />
      <section>
        {notesAvilable ? (
          <NotesEditor
            title={notes[currentNote].title}
            body={notes[currentNote].body}
            onNoteChange={UpdateNotes}
            onNoteDelete={DeleteNote}
          />
        ) : (
          <EmptyNotes />
        )}
      </section>
    </div>
  );
}

export default App;
