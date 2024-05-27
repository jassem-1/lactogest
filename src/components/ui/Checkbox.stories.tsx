import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Checkbox } from './Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    className: { control: 'text' },
    defaultChecked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
} as Meta;

const Template: StoryFn<React.ComponentPropsWithoutRef<typeof Checkbox>> = (
  args,
) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: 'border',
  defaultChecked: true,
  disabled: false,
};
