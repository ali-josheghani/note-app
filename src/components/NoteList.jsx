import { useNotes, useNotesDisPatch } from "../context/noteContext";

const NoteList = ({ sortBy }) => {
  const notes = useNotes();
  let sortNotes = notes;
  if (sortBy == "latest")
    sortNotes = [...notes].sort(
      (a, b) => new Date(b.createAt) - new Date(a.createAt)
    );
  if (sortBy == "earliest")
    sortNotes = [...notes].sort(
      (a, b) => new Date(a.createAt) - new Date(b.createAt)
    );
  if (sortBy == "complated")
    sortNotes = [...notes].sort(
      (a, b) => Number(a.complated) - Number(b.complated)
    );
  return (
    <div className="note-list">
      {sortNotes.map((note) => {
        return <NoteItem key={note.id} note={note} />;
      })}
    </div>
  );
};

export default NoteList;

const NoteItem = ({ note }) => {
  const dispatch = useNotesDisPatch()
  const option = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <div className={`note-item ${note.complated ? "completed" : ""}`}>
      <div className="note-item__header">
        <div>
          <p className="title">{note.title}</p>
          <p className="desc">{note.description}</p>
        </div>
        <div className="actions">
          <button
            onClick={() => dispatch({ type: "delete", payload: id })}
            style={{ color: "red", fontSize: "35px" }}
          >
            &times;
          </button>
          <input
            type="checkbox"
            name={note.id}
            id={note.id}
            value={note.id}
            checked={note.complate}
            onChange={(e) => {
              const noteIdInput = Number(e.target.value);
              dispatch({ type: "complete", payload: noteIdInput });
            }}
          />
        </div>
      </div>
      <div className="note-item__footer">
        {new Date(note.createAt).toLocaleDateString("en-US", option)}
      </div>
    </div>
  );
};
