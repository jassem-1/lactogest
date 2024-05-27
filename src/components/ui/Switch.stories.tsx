import React from 'react';
import { Switch } from './Switch';
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/Switch',
  component: Switch,
  argTypes: {
    checked: { control: 'boolean' },
  },
} as Meta;

const Template: StoryFn = (args) => <Switch checked={args.checked} />;

export const Default = Template.bind({});

Default.args = {
  checked: true,
};
