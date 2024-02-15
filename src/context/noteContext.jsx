import React, { useContext, useReducer } from "react";
import { createContext } from "react";

const NotesContext = createContext(null);
const NotesDispatchContext = createContext(null);

const noteReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "delete":
      return state.filter((n) => n.id !== action.payload);
    case "complete":
      return state.map((note) =>
        note.id == action.payload
          ? { ...note, complated: !note.complated }
          : note
      );
    default:
      throw new Error("sorry not there this actios!" + action.type);
  }
};

export default function NoteProvider({ children }) {
  const [notes, dispatch] = useReducer(noteReducer, []);
  return (
    <NotesContext.Provider value={notes}>
      <NotesDispatchContext.Provider value={dispatch}>
        {children}
      </NotesDispatchContext.Provider>
    </NotesContext.Provider>
  );
}

export function useNotes() {
  return useContext(NotesContext);
}

export function useNotesDisPatch() {
  return useContext(NotesDispatchContext);
}
