import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from './Button'
import classNames from 'classnames'
import { FaPencilAlt } from 'react-icons/fa'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

type Story = StoryObj<ButtonProps>

export const Primary: Story = {
  args: {
    children: 'Click',
    type: 'button'
  },
}

export const Circle: Story = {
  args: {
    children: <FaPencilAlt size={18} className={'text-light-200'}/>,
    type: 'button',
    className: classNames("hover:bg-light-300 hover:bg-opacity-30 rounded-full !p-0 border-none h-7 aspect-square")
  },
}