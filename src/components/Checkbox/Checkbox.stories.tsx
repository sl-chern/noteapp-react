import { Meta, StoryObj } from '@storybook/react'
import { Checkbox, CheckboxProps } from './Checkbox'

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

type Story = StoryObj<CheckboxProps>

export const Primary: Story = {
  args: {
    label: 'Something'
  },
}