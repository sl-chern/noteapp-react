import './App.css'
import Table from './components/Table'
import TableBody from './components/TableBody'
import TableCell from './components/TableCell'
import TableHead from './components/TableHead'
import TableRow from './components/TableRow'
import { useAppSelector } from './hooks/redux'
import { INote } from './models/INote'
import { getDatesFromString } from './utils/getDatesFromString'
import { HiArchive } from 'react-icons/hi'
import { BsFillTrashFill } from 'react-icons/bs'
import classNames from "classnames"
import Button from './components/Button'
import { MdTask } from 'react-icons/md'
import { FaCog, FaLightbulb, FaQuestion, FaPencilAlt } from 'react-icons/fa'
import { categoriesOptions } from './data/categoriesOptions'
import { IOption } from './models/IOption'

function App() {
  const notes: Array<INote> = useAppSelector(state => state.note.notes)
  const noteButtonStyles: string = 'hover:bg-light-300 hover:bg-opacity-30 rounded-full p-0 border-none h-7 aspect-square'

  const getIconByCategory = (category: string): React.ReactNode => {
    switch(category) {
      case "Task":
        return <MdTask size={24} className={'text-light-300'}/>
      case "Random Thought":
        return <FaCog size={24} className={'text-light-300'}/>
      case "Idea":
        return <FaLightbulb size={24} className={'text-light-300'}/>
      default:
        return <FaQuestion size={24} className={'text-light-300'}/>
    }
  }

  return (
    <div className='min-h-screen w-screen bg-dark-400 flex justify-center'>
      <main className='w-[1280px] flex flex-col mt-4 gap-8'>
        <section className='w-full flex flex-col mt-4 gap-4'>
          <Table columns="40px 160px 160px 160px 400px 160px 100px">
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Created</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Content</TableCell>
                <TableCell>Dates</TableCell>
                <TableCell className={classNames('flex flex-row gap-2 justify-end items-center px-2')}>
                  <HiArchive size={24} className={'text-dark-200'}/>
                  <BsFillTrashFill size={20} className={'text-dark-200'}/>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                notes.map((item: INote, index: number): React.ReactNode => 
                  <TableRow key={`noterow${index}`}>
                    <TableCell>{getIconByCategory(item.category)}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.created.toLocaleDateString()}</TableCell>
                    <TableCell>{item.category}</TableCell>
                    <TableCell>{item.content}</TableCell>
                    <TableCell>{getDatesFromString(item.content)}</TableCell>
                    <TableCell className={classNames('flex flex-row gap-1 justify-end items-center')}>
                      <Button className={classNames(noteButtonStyles)}>
                        <FaPencilAlt size={18} className={'text-light-200'}/>
                      </Button>
                      <Button className={classNames(noteButtonStyles)}>
                        <HiArchive size={24} className={'text-light-200'}/>
                      </Button>
                      <Button className={classNames(noteButtonStyles)}>
                        <BsFillTrashFill size={20} className={'text-light-200'}/>
                      </Button>
                    </TableCell>
                  </TableRow>
                )
              }
            </TableBody>
          </Table>
          <Button className={classNames('w-32 mx-auto hover:bg-light-300 hover:text-dark-200')}>Create Note</Button>
        </section>
        
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
