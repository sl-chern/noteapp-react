import { configureStore, combineReducers } from '@reduxjs/toolkit'
import noteSlice from '../src/redux/slices/NoteSlice'

const rootReducer = combineReducers({
  note: noteSlice
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    devTools: true,
  })
}