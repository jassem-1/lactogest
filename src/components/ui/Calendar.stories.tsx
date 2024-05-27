import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Calendar } from './Calendar';

export default {
  title: 'Components/Calendar',
  component: Calendar,
  argTypes: {
    className: { control: 'text' },
    classNames: { control: 'object' },
    showOutsideDays: { control: 'boolean' },
  },
} as Meta;

const Template: StoryFn = (args) => <Calendar {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: 'flex justify-center',
  classNames: {
    today: 'text-primary',
  },
  showOutsideDays: true,
};
