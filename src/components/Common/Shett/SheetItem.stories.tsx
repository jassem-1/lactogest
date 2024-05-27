import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { SheetItem } from './SheetItem';

export default {
  title: 'Common/SheetItem',
  component: SheetItem,
} as Meta;

const content = (
  <p className="ml-6">
    Pellentesque habitant morbi tristique senectus et netus et malesuada fames
    ac turpis egestas, consectetur adipiscing elit.
  </p>
);

const Template: StoryFn = (args) => (
  <div>
    <SheetItem
      {...args}
      open={args.open}
      title="Exemple"
      description="Veuillez saisir les informations sur le critère"
      sheetContent={content}
    />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  open: true,
};
