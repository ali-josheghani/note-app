import { useReducer, useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";
import NoteHeader from "./components/NoteHeader";
import NoteProvider from "./context/noteContext";

const App = () => {
  const [sortBy, setSortBy] = useState("latest");

  // const addNoteHandler = (newNotes) => {
  //   // setNotes((prevNotes) => [...prevNotes, newNotes]);
  //   dispatch({ type: "add", payload: newNotes });
  // };
  // const deleteNoteHandler = (id) => {
  //   // setNotes((prevNote) => prevNote.filter((n) => n.id !== id));
  //   dispatch({ type: "delete", payload: id });
  // };
  // const onComplateHandler = (e) => {
  //   const noteIdInput = Number(e.target.value);
  //   dispatch({ type: "complete", payload: noteIdInput });
  //   // setNotes((prevNotes) =>
  //   //   prevNotes.map((note) =>
  //   //     note.id == noteIdInput ? { ...note, complated: !note.complated } : note
  //   //   )
  //   // );
  // };
  return (
    <NoteProvider>
      <div className="container">
        <NoteHeader sortBy={sortBy} onSort={(e) => setSortBy(e.target.value)} />
        <div className="note-app">
          <AddNewNote />
          <div className="note-container">
            <NoteStatus />
            <NoteList sortBy={sortBy} />
          </div>
        </div>
      </div>
    </NoteProvider>
  );
};

export default App;
