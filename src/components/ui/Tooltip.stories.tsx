import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './Tooltip';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
} as Meta;

const Template: StoryFn = (args) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger className="ml-4 border-2 px-2 py-2 rounded-md shadow-sm">
        Survolez
      </TooltipTrigger>
      <TooltipContent className="ml-4">
        <p>Une simple Tooltip</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

export const Default = Template.bind({});
