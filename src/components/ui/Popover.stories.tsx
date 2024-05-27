import React from 'react';
import { Popover, PopoverTrigger, PopoverContent } from './Popover';
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/Popover',
  component: Popover,
  argTypes: {
    className: { control: 'text' },
  },
} as Meta;

const Template: StoryFn = (args) => (
  <Popover {...args}>
    <PopoverTrigger>
      <button>Cliquez ici</button>
    </PopoverTrigger>
    <PopoverContent>
      <h3>Contenu du popover</h3>
      <p>Voici le contenu de la fenêtre contextuelle.</p>
    </PopoverContent>
  </Popover>
);

export const Default = Template.bind({});
Default.args = {
  align: 'center',
  sideOffset: 4,
};
