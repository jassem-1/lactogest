import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Input } from './Input';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    className: { control: 'text' },
    disabled: { control: 'boolean' },
  },
} as Meta;

const Template: StoryFn<React.ComponentPropsWithoutRef<typeof Input>> = (
  args,
) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: 'border w-1/2 ml-2',
  disabled: false,
};
