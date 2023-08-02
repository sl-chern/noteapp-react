import { createSlice } from "@reduxjs/toolkit";
import { INote } from "../../models/INote";
import { notes } from "../../data/notes";

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

  }
})

export default noteSlice.reducer