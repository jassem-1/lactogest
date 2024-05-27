import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: [
          'default',
          'destructive',
          'outline',
          'secondary',
          'ghost',
          'link',
        ],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['default', 'sm', 'lg', 'xs', 'icon', 'icon-sm', 'icon-xs'],
      },
    },
    asChild: { control: 'boolean' },
  },
} as Meta;

const Template: StoryFn<React.ComponentProps<typeof Button>> = (args) => (
  <Button {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
  variant: 'default',
  size: 'default',
};
