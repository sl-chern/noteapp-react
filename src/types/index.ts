import { INote } from "../models/INote"

export type ChangeNotePaload = {
  id: string,
  note: INote
}

export type NoteSubmitForm = {
  name: string,
  content: string,
  category: string
}