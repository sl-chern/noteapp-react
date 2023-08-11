import type { Preview } from '@storybook/react'
import { withThemeByClassName } from '@storybook/addon-styling'
import { Provider } from 'react-redux'
import '../src/index.css'
import { setupStore } from './mockedStore'
import React from 'react'

const store = setupStore()

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'dark',
    },
  },

  decorators: [
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'dark',
    }),
    (story) => (<Provider store={store}>{story()}</Provider>)
  ],
};

export default preview;
