import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from './Button'
import classNames from 'classnames'
import { FaPencilAlt } from 'react-icons/fa'

const options = {icon: <FaPencilAlt size={18} className={'text-light-200'}/>, text: "Something"}

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
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
          icon: 'Icon',
          text: 'Text',
        },
      },
    }
  }
}

export default meta

type Story = StoryObj<ButtonProps>

export const Primary: Story = {
  args: {
    children: options.text,
    type: 'button'
  },
}

export const Circle: Story = {
  args: {
    children: options.icon,
    type: 'button',
    className: classNames("hover:bg-light-300 hover:bg-opacity-30 rounded-full !p-0 border-none h-7 aspect-square")
  },
}