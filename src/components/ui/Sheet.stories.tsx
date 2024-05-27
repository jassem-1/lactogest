import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from './Sheet';
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/Sheet',
  component: Sheet,
} as Meta;

const Template: StoryFn = (args) => (
  <Sheet {...args}>
    <SheetContent className="min-w-[70%] max-md:min-w-[90%] max-sm:min-w-[100%] bg-card flex flex-col p-0 gap-0">
      <SheetHeader className=" p-4 border-b">
        <SheetTitle>Exemple</SheetTitle>
        <SheetDescription>
          Veuillez saisir les informations sur le critère
        </SheetDescription>
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas, consectetur adipiscing elit.
      </SheetHeader>
    </SheetContent>
  </Sheet>
);

export const Default = Template.bind({});

Default.args = {
  open: true,
};
