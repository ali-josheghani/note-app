import { useState } from "react";
import { useNotesDisPatch } from "../context/noteContext";

const AddNewNote = () => {
  const dispatch = useNotesDisPatch()
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    if(!title && !description) return null;
    const newNotes ={
        title,
        description,
        id: Date.now(),
        complated:false,
        createAt: new Date().toISOString(),
    }

    dispatch({ type: "add", payload: newNotes });

    setTitle("")
    setDescription("")
  };
  return (
    <div className="add-new-note">
      <h2>Add New Note</h2>
      <form className="note-form" onSubmit={submitHandler}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          className="text-field"
          placeholder="note title"
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          className="text-field"
          placeholder="note desk"
        />
        <button type="submit" className="btn btn--primary">
          Add New Note
        </button>
      </form>
    </div>
  );
};

export default AddNewNote;
