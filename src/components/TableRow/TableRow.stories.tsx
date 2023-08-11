import { Meta, StoryObj } from '@storybook/react'
import { TableRow, TableRowProps } from './TableRow'
import { TableCell } from '../TableCell'
import { Context } from "../../context/context"

const optionsEntries = Array
  .from({ length: 10 }, (_, index) => index + 1)
  .map((item: number) => {
    const value = Array.from({ length: item }, (_, index) => <TableCell className='flex flex-row gap-2 items-center px-2 text-light-200'>{index + 1}</TableCell>)
    return [item, value]
  })

const labelsEntries = Array
  .from({ length: 10 }, (_, index) => index + 1)
  .map((item: number) => [item, `${item} cell(s)`])

const options = Object.fromEntries(optionsEntries)
const labels = Object.fromEntries(labelsEntries)

const meta: Meta<typeof TableRow> = {
  title: 'Components/TableRow',
  component: TableRow,
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
  },
  decorators: [
    story => <Context.Provider value={{columns: "50px 50px 50px 50px 50px 50px 50px 50px 50px 50px"}}>{story()}</Context.Provider>
  ]
}

export default meta

type Story = StoryObj<TableRowProps>

export const Primary: Story = {
  args: {
    children: options[1]
  },
}