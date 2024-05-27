import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { SelectItems } from '..';

export default {
  title: 'Common/SelectItems',
  component: SelectItems,
} as Meta;

const Template: StoryFn = (args) => (
  <div>
    <SelectItems
      placeholder="Select"
      items={[
        { content: <h1>item1</h1>, value: 'item 1' },
        { content: <h1>item2</h1>, value: 'item 2' },
      ]}
    />
  </div>
);

export const Default = Template.bind({});
Default.args = {};
