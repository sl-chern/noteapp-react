import { configureStore, combineReducers } from '@reduxjs/toolkit'
import noteSlice from './slices/NoteSlice'

const rootReducer = combineReducers({
  note: noteSlice
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    devTools: import.meta.env.NODE_ENV !== 'production',
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']