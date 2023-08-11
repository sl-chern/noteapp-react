import { Meta, StoryObj } from '@storybook/react'
import { NoteTable } from './NoteTable'

const meta: Meta<typeof NoteTable> = {
  title: 'Components/NoteTable',
  component: NoteTable,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

type Story = StoryObj

export const Primary: Story = {}