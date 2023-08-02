import React, { useContext } from 'react'
import { IContext } from '../models/IContext'

export const Context = React.createContext<IContext>({columns: null})
export const useColumnsContext = () => useContext(Context)