import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { PopoverItem } from './PopoverItem';
import { Button } from '@/components/ui';

export default {
  title: 'Common/PopoverItem',
  component: PopoverItem,
} as Meta;

const popoverContent = (
  <>
    <h3>Contenu du popover</h3>
    <p>Voici le contenu de la fenêtre contextuelle.</p>
  </>
);
const popoverTrigger = <Button variant={'outline'}>Cliquez ici</Button>;

const Template: StoryFn = (args) => (
  <PopoverItem
    {...args}
    popoverTrigger={popoverTrigger}
    popoverContent={popoverContent}
  />
);

export const Default = Template.bind({});
Default.args = {
  sideoffset: 4,
};
