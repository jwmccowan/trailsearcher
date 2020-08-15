import * as React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { StyleThemeProvider } from '../src/lib/theme';

addDecorator(withKnobs);
addDecorator(Story => {
  return (
    <StyleThemeProvider>
      {Story()}
    </StyleThemeProvider>
  )
})
configure(require.context('../src/lib', true, /\.stories\.(j|t)sx?$/), module);
