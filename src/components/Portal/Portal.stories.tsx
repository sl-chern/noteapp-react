import { Meta, StoryObj } from '@storybook/react'
import { Portal, PortalProps } from './Portal'

const options = {
  jsx: (
    <div className="flex justify-center">
      <h2 className="font-bold font-openSans text-3xl text-light-300">Content</h2>
    </div>
  ),
  text: "Something"
}

const meta: Meta<typeof Portal> = {
  title: 'Components/Portal',
  component: Portal,
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

type Story = StoryObj<PortalProps>

export const Primary: Story = {
  args: {
    children: options.jsx
  },
}