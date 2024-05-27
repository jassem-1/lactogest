import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Badge } from './Badge';

export default {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    variant: {
      contole: {
        type: 'select',
        options: ['default', 'secondary', 'destructive', 'outline'],
      },
    },
  },
} as Meta;

const Template: StoryFn<React.ComponentProps<typeof Badge>> = (args) => (
  <Badge {...args} />
);

export const Default = Template.bind({});

Default.args = {
  children: 'Badge',
  variant: 'default',
};
