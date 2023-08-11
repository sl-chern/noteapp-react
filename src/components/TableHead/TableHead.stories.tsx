import { Meta, StoryObj } from '@storybook/react'
import { TableHead, TableHeadProps } from './TableHead'
import { Context } from "../../context/context"
import { TableRow } from '../TableRow'
import { TableCell } from '../TableCell'

const meta: Meta<typeof TableHead> = {
  title: 'Components/TableHead',
  component: TableHead,
  parameters: {
    controls: { expanded: true },
  },
  decorators: [
    story => <Context.Provider value={{columns: "50px 50px 50px"}}>{story()}</Context.Provider>
  ]
}

export default meta

type Story = StoryObj<TableHeadProps>

export const Primary: Story = {
  args: {
    children: (
      <TableRow>
        <TableCell className='text-dark-200'>1</TableCell>
        <TableCell className='text-dark-200'>2</TableCell>
        <TableCell className='text-dark-200'>3</TableCell>
      </TableRow>
    ),
  },
}