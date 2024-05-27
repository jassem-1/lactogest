import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from './Collapsible';

export default {
  title: 'Components/Collapsible',
  component: Collapsible,
} as Meta;

const Template: StoryFn = (args) => (
  <Collapsible>
    <CollapsibleTrigger>Est-ce un exemple de Collapsible ?</CollapsibleTrigger>
    <CollapsibleContent>
      Oui, c&apos;est le storybook de Collapsible.
    </CollapsibleContent>
  </Collapsible>
);

export const Default = Template.bind({});
