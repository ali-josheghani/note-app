import { useNotes } from "../context/noteContext"

const NoteHeader = ({ sortBy , onSort}) => {
    const notes = useNotes()
    return(
        <div className="note-header">
            <h1>My Notes({notes.length})</h1>
            <select value={sortBy} onChange={onSort}>
                <option value="latest">Sort based on latest notes</option>
                <option value="earliest">Sort based on earliest notes</option>
                <option value="complated">Sort based on complated notes</option>
            </select>
        </div>
    )
}

export default NoteHeader