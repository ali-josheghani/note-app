import { useReducer, useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";
import NoteHeader from "./components/NoteHeader";

const noteReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "delete":
      return state.filter((n) => n.id !== action.payload);
    case "complete":
      return state.map((note) =>
        note.id == action.payload ? { ...note, complated: !note.complated } : note
      );
    default:
      throw new Error('sorry not there this actios!'+action.type)
  }
};
const App = () => {
  const [notes, dispatch] = useReducer(noteReducer, []);
  const [sortBy, setSortBy] = useState("latest");

  const addNoteHandler = (newNotes) => {
    // setNotes((prevNotes) => [...prevNotes, newNotes]);
    dispatch({ type: "add", payload: newNotes });
  };
  const deleteNoteHandler = (id) => {
    // setNotes((prevNote) => prevNote.filter((n) => n.id !== id));
    dispatch({ type: "delete", payload: id });
  };
  const onComplateHandler = (e) => {
    const noteIdInput = Number(e.target.value);
    dispatch({ type: "complete", payload: noteIdInput });
    // setNotes((prevNotes) =>
    //   prevNotes.map((note) =>
    //     note.id == noteIdInput ? { ...note, complated: !note.complated } : note
    //   )
    // );
  };
  return (
    <div className="container">
      <NoteHeader
        notes={notes}
        sortBy={sortBy}
        onSort={(e) => setSortBy(e.target.value)}
      />
      <div className="note-app">
        <AddNewNote onAddNotes={addNoteHandler} />
        <div className="note-container">
          <NoteStatus notes={notes} />
          <NoteList
            notes={notes}
            sortBy={sortBy}
            onDelete={deleteNoteHandler}
            onComplate={onComplateHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
