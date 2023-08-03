import { INote } from "../models/INote";

export const notes: Array<INote> = [
  {
    id: crypto.randomUUID(),
    name: "To do something",
    category: "Task",
    content: "1I’m gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021",
    created: new Date().toLocaleDateString(),
    archived: false
  },
  {
    id: crypto.randomUUID(),
    name: "To do something",
    category: "Random Thought",
    content: "2I’m gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021",
    created: new Date().toLocaleDateString(),
    archived: true
  },
  {
    id: crypto.randomUUID(),
    name: "To do something",
    category: "Idea",
    content: "3I’m gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021",
    created: new Date().toLocaleDateString(),
    archived: false
  },
  {
    id: crypto.randomUUID(),
    name: "To do something",
    category: "Task",
    content: "4I’m gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021",
    created: new Date().toLocaleDateString(),
    archived: false
  },
  {
    id: crypto.randomUUID(),
    name: "To do something",
    category: "Random Thought",
    content: "5I’m gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021",
    created: new Date().toLocaleDateString(),
    archived: false
  },
  {
    id: crypto.randomUUID(),
    name: "To do something",
    category: "Idea",
    content: "6I’m gonna have a dentist appointment on the , I moved it from ",
    created: new Date().toLocaleDateString(),
    archived: false
  },
  {
    id: crypto.randomUUID(),
    name: "To do something",
    category: "Task",
    content: "7I’m gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021",
    created: new Date().toLocaleDateString(),
    archived: false
  }
]