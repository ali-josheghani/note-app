import { useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";
import NoteHeader from "./components/NoteHeader";
const App = () => {
  const [notes, setNotes] = useState([]);
  const [sortBy, setSortBy] = useState("latest");

  const addNoteHandler = (newNotes) => {
    setNotes((prevNotes) => [...prevNotes, newNotes]);
  };
  const deleteNoteHandler = (id) => {
    setNotes((prevNote) => prevNote.filter((n) => n.id !== id));
  };
  const onComplateHandler = (e) => {
    const noteIdInput = Number(e.target.value);
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id == noteIdInput ? { ...note, complated: !note.complated } : note
      )
    );
  };
  return (
    <div className="container">
      <NoteHeader notes={notes} sortBy={sortBy} onSort={e => setSortBy(e.target.value)} />
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
