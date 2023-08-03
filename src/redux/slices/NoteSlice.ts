import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { INote } from "../../models/INote";
import { notes } from "../../data/notes";
import { ChangeNotePaload } from "../../types";

interface NoteState {
  notes: INote[],
  all: boolean
}

const initialState: NoteState = {
  notes: [...notes],
  all: false
}

export const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    changeDisplayParametr(state) {
      state.all = !state.all
    },
    updateNote(state, action: PayloadAction<ChangeNotePaload>) {
      const noteIndex = state.notes.findIndex((item: INote): boolean => item.id === action.payload.id)
      console.log(noteIndex, action.payload)
      state.notes[noteIndex] = action.payload.note
    },
    deleteNote(state, action: PayloadAction<string>) {
      const noteIndex = state.notes.findIndex((item: INote): boolean => item.id === action.payload)
      state.notes.splice(noteIndex, 1)
    },
    createNote(state, action: PayloadAction<INote>) {
      state.notes.push(action.payload)
    }
  }
})

export default noteSlice.reducer

export const { changeDisplayParametr, updateNote, deleteNote, createNote } = noteSlice.actions