import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { AccordionItems } from '..';

export default {
  title: 'Common/AccordionItem',
  component: AccordionItems,
} as Meta;

const Template: StoryFn = (args) => (
  <div>
    <AccordionItems
      {...args.type}
      {...args}
      type="multiple"
      items={[
        { label: 'Item 1', content: <h1>item1</h1>, value: 'item 1' },
        { label: 'Item 2', content: <h1>item2</h1>, value: 'item 2' },
      ]}
    />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  type: 'multiple',
};
