import * as React from 'react';
import { Button } from './Button';

// TODO: much to do once nrwl releases storybook 6
// 1. Template the stories
// 2. add stories to component tests
export const ButtonStory: React.SFC<{}> = () => <Button>{'Button'}</Button>;

export default {
  title: 'Components/Button',
  component: Button,
};
