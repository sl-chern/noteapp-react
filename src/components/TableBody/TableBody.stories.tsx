import { Meta, StoryObj } from '@storybook/react'
import { TableBody, TableBodyProps } from './TableBody'
import { Context } from "../../context/context"
import { TableRow } from '../TableRow'
import { TableCell } from '../TableCell'

const options = {
  '1 row': [
    <TableRow>
      <TableCell className='text-light-200'>1</TableCell>
      <TableCell className='text-light-200'>2</TableCell>
      <TableCell className='text-light-200'>3</TableCell>
    </TableRow>
  ],
  '2 rows': [
    <TableRow>
      <TableCell className='text-light-200'>1</TableCell>
      <TableCell className='text-light-200'>2</TableCell>
      <TableCell className='text-light-200'>3</TableCell>
    </TableRow>,
    <TableRow>
      <TableCell className='text-light-200'>4</TableCell>
      <TableCell className='text-light-200'>5</TableCell>
      <TableCell className='text-light-200'>6</TableCell>
    </TableRow>
  ]
}

const meta: Meta<typeof TableBody> = {
  title: 'Components/TableBody',
  component: TableBody,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    children: {
      options: Object.keys(options),
      mapping: options,
      control: {
        type: 'select',
        labels: {
          '1 row': '1 row',
          '2 rows': '2 rows',
        },
      },
    }
  },
  decorators: [
    story => <Context.Provider value={{columns: "50px 50px 50px"}}>{story()}</Context.Provider>
  ]
}

export default meta

type Story = StoryObj<TableBodyProps>

export const Primary: Story = {
  args: {
    children: options['1 row'],
  },
}