import { Meta, StoryObj } from '@storybook/react'
import { NoteModal, NoteModalProps } from './NoteModal'

const meta: Meta<typeof NoteModal> = {
  title: 'Components/NoteModal',
  component: NoteModal,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

type Story = StoryObj<NoteModalProps>

export const Primary: Story = {
  args: {
    header: 'Create Note',
    buttonLabel: 'Create',
    onSubmit: (data) => console.log(data),
    visibility: true,
    setVisibility: (newVisibility) => console.log(newVisibility)
  },
}

export const WithValues: Story = {
  args: {
    header: 'Update Note',
    buttonLabel: 'Update',
    onSubmit: (data) => console.log(data),
    visibility: true,
    setVisibility: (newVisibility) => console.log(newVisibility),
    initialValue: {
      id: "asdfdgn",
      name: "Example",
      category: "Idea",
      content: "Something",
      created: new Date().toLocaleDateString(),
      archived: false
    }
  },
}