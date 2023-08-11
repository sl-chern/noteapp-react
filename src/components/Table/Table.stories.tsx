import { Meta, StoryObj } from '@storybook/react'
import { Table, TableProps } from './Table'
import { TableRow } from '../TableRow'
import { TableCell } from '../TableCell'
import { TableHead } from '../TableHead'
import { TableBody } from '../TableBody'

// const options = {
//   '1 row': [
//     <TableRow>
//       <TableCell className='text-light-200'>1</TableCell>
//       <TableCell className='text-light-200'>2</TableCell>
//       <TableCell className='text-light-200'>3</TableCell>
//     </TableRow>
//   ],
//   '2 rows': [
//     <TableRow>
//       <TableCell className='text-light-200'>1</TableCell>
//       <TableCell className='text-light-200'>2</TableCell>
//       <TableCell className='text-light-200'>3</TableCell>
//     </TableRow>,
//     <TableRow>
//       <TableCell className='text-light-200'>4</TableCell>
//       <TableCell className='text-light-200'>5</TableCell>
//       <TableCell className='text-light-200'>6</TableCell>
//     </TableRow>
//   ]
// }

const optionsEntries = Array
  .from({ length: 10 }, (_, index) => index + 1)
  .map((item: number) => {
    const rowCells = Array.from({ length: item }, (_, index) => 
      <TableCell className='flex flex-row gap-2 items-center px-2 text-light-200'>{index + 1}</TableCell>
    )
    const headCells = Array.from({ length: item }, (_, index) => 
      <TableCell className='flex flex-row gap-2 items-center px-2 text-dark-200'>{index + 1}</TableCell>
    )
    return [item, [
      <TableHead>
        <TableRow>
          {headCells}
        </TableRow>
      </TableHead>,
      <TableBody>
        <TableRow>
          {rowCells}
        </TableRow>
        <TableRow>
          {rowCells}
        </TableRow>
      </TableBody>
    ]]
  })

const labelsEntries = Array
  .from({ length: 10 }, (_, index) => index + 1)
  .map((item: number) => [item, `${item} cell(s)`])

const options = Object.fromEntries(optionsEntries)
const labels = Object.fromEntries(labelsEntries)

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    children: {
      options: Object.keys(options),
      mapping: options,
      control: {
        type: 'select',
        labels: labels
      },
    }
  }
}

export default meta

type Story = StoryObj<TableProps>

export const Primary: Story = {
  args: {
    children: options[1],
    columns: '100px 100px 100px',
    className: ""
  },
}