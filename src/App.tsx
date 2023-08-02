import './App.css'
import Table from './components/Table'
import TableBody from './components/TableBody'
import TableCell from './components/TableCell'
import TableHead from './components/TableHead'
import TableRow from './components/TableRow'
import { useAppSelector } from './hooks/redux'
import { INote } from './models/INote'
import classNames from "classnames"
import { categoriesOptions } from './data/categoriesOptions'
import { IOption } from './models/IOption'
import NoteTable from './components/NoteTable'
import { getIconByCategory } from './utils/getIconByCategory'

function App() {
  const notes: Array<INote> = useAppSelector(state => state.note.notes)

  return (
    <div className='min-h-screen w-screen bg-dark-400 flex justify-center'>
      <main className='w-[1280px] flex flex-col mt-4 gap-8'>
        <NoteTable />
        
        <section className='w-full flex flex-col mt-4 gap-4'>
          <Table columns="40px 160px 160px 160px" className={classNames('w-min')}>
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Archived</TableCell>
                <TableCell>Not Archived</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                categoriesOptions.map((item: IOption, index: number): React.ReactNode =>
                  <TableRow key={`noterow${index}`}>
                    <TableCell>{getIconByCategory(item.label)}</TableCell>
                    <TableCell>{item.label}</TableCell>
                    <TableCell>{notes.filter((note: INote): boolean => note.category === item.label && note.archived === true).length}</TableCell>
                    <TableCell>{notes.filter((note: INote): boolean => note.category === item.label && note.archived === false).length}</TableCell>
                  </TableRow>           
                )
              }
            </TableBody>
          </Table>
        </section>
      </main>
    </div>
  )
}

export default App
