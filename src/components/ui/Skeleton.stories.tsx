import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Skeleton } from './Skeleton';

export default {
  title: 'Components/Skeleton',
  component: Skeleton,
} as Meta;

const Template: StoryFn = (args) => (
  <div>
    <Skeleton className="w-1/4 h-[20px] rounded-full mb-2" />
    <Skeleton className="w-1/2 h-[20px] rounded-full mb-2" />
    <Skeleton className="w-1/3 h-[20px] rounded-full" />
  </div>
);

export const Default = Template.bind({});
