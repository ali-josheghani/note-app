import { useNotes } from "../context/noteContext"
import Message from "./Message"

const NoteStatus = () => {
    const notes = useNotes()
    const allNotes = notes.length
    const completedNotes = notes.filter(n => n.complated).length
    const openNotes = allNotes - completedNotes

    if(!allNotes) return <Message><h2>No notes have been added yet!</h2></Message>
    return(
        <ul className="note-status">
            <li>
                All <span>{allNotes}</span>
            </li>
            <li>
                Complated <span>{completedNotes}</span>
            </li>
            <li>
                Open <span>{openNotes}</span>
            </li>
        </ul>
    )
}

export default NoteStatus