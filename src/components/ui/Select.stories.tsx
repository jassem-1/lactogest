// stories/index.js
import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './Select';
import { Meta } from '@storybook/react';

export default {
  title: 'Components/Select',
  component: Select,
} as Meta;

const Template = (args: any) => (
  <Select {...args}>
    <SelectTrigger className="w-[180px]">
      <SelectValue placeholder="Theme" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="light">Light</SelectItem>
      <SelectItem value="dark">Dark</SelectItem>
      <SelectItem value="system">System</SelectItem>
    </SelectContent>
  </Select>
);

export const Default = Template.bind({});
