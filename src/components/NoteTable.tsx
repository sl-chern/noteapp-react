import classNames from 'classnames'
import Table from './Table'
import TableCell from './TableCell'
import TableHead from './TableHead'
import TableRow from './TableRow'
import TableBody from './TableBody'
import { INote } from '../models/INote'
import { HiArchive } from 'react-icons/hi'
import { BsFillTrashFill } from 'react-icons/bs'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { getDatesFromString } from '../utils/getDatesFromString'
import Button from './Button'
import { FaPencilAlt } from 'react-icons/fa'
import { BiSolidArchiveIn, BiSolidArchiveOut } from 'react-icons/bi'
import { getIconByCategory } from '../utils/getIconByCategory'
import Checkbox from './Checkbox'
import { changeDisplayParametr, deleteNote, updateNote } from '../redux/slices/NoteSlice'

export default function NoteTable() {
  const showAll: boolean = useAppSelector(state => state.note.all)
  const notes: Array<INote> = useAppSelector(state => showAll ? state.note.notes : state.note.notes.filter((item: INote): boolean => !item.archived))
  const noteButtonStyles: string = 'hover:bg-light-300 hover:bg-opacity-30 rounded-full !p-0 border-none h-7 aspect-square'

  const dispatch = useAppDispatch()

  return (
    <section className='w-full flex flex-col mt-4 gap-4'>
      <Checkbox label='Show Archived Notes' onChange={() => {dispatch(changeDisplayParametr())}}/>

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
                  {
                    item.archived
                      ? <Button className={classNames(noteButtonStyles)} onClick={() => dispatch(updateNote({ id: item.id, note: { ...item, archived: false } }))}>
                          <BiSolidArchiveOut size={20} className={'text-light-200'}/>
                        </Button>
                      : <Button className={classNames(noteButtonStyles)} onClick={() => dispatch(updateNote({ id: item.id, note: { ...item, archived: true } }))}>
                          <BiSolidArchiveIn size={20} className={'text-light-200'}/>
                        </Button>
                  }
                  <Button className={classNames(noteButtonStyles)} onClick={() => dispatch(deleteNote(item.id))}>
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
  )
}
