import { Meta, StoryObj } from '@storybook/react'
import { Modal, ModalProps } from './Modal'
import classNames from 'classnames'
import { Button } from '../Button'

const options = {
  "JSX Example 1": (
    <div className="flex justify-center">
      <h2 className="font-bold font-openSans text-3xl text-light-300">Content</h2>
    </div>
  ),
  "JSX Example 2": (
    <form onSubmit={e => e.preventDefault()}>
      <div className='flex flex-col gap-2 p-4'>
        <label className="flex flex-col text-light-300 font-roboto text-lg">
          Name
          <input name="name" type="text" className="bg-transparent p-2 border-2 border-light-300 border-solid rounded outline-none text-light-300 font-roboto w-full"/>
        </label>

        <Button 
          className={classNames('w-32 mx-auto hover:bg-light-300 hover:text-dark-200 mt-4')}
          type='submit'
        >
          Submit
        </Button>
      </div>
    </form>
  )
}

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
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
          'JSX Example 1': 'Example 1',
          'JSX Example 2': 'Example 2',
        },
      },
    }
  }
}

export default meta

type Story = StoryObj<ModalProps>

export const Primary: Story = {
  args: {
    children: options['JSX Example 1']
  },
}