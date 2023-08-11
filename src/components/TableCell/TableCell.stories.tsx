import { Meta, StoryObj } from '@storybook/react'
import { TableCell, TableCellProps } from './TableCell'
import { HiArchive } from 'react-icons/hi'
import { BsFillTrashFill } from 'react-icons/bs'

const options = {
  jsx: (
    <>
      <HiArchive size={24} className={'text-light-200'}/>
      <BsFillTrashFill size={20} className={'text-light-200'}/>
    </>
  ),
  text: "Something"
}

const meta: Meta<typeof TableCell> = {
  title: 'Components/TableCell',
  component: TableCell,
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
          jsx: 'JSX',
          text: 'Text',
        },
      },
    }
  }
}

export default meta

type Story = StoryObj<TableCellProps>

export const Primary: Story = {
  args: {
    children: options.jsx,
    className: "flex flex-row gap-2 items-center px-2 text-light-200"
  },
}