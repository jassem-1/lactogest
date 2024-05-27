import React from 'react';
import { StoryFn } from '@storybook/react';
import { Avatar, AvatarImage, AvatarFallback } from './Avatar';
import { cn } from '@/utils/tailwind';

export default {
  title: 'Components/Avatar',
  component: Avatar,
};

const Template: StoryFn = (args) => (
  <Avatar {...args}>
    <AvatarImage src="" alt="User Avatar" />
    <AvatarFallback>A</AvatarFallback>
  </Avatar>
);

export const Default = Template.bind({});
Default.args = {
  className: cn(),
};
