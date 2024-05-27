import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { RadioItem } from './RadioItem';

export default {
  title: 'Common/RadioItem',
  component: RadioItem,
} as Meta;

const Template: StoryFn = (args) => (
  <div>
    <RadioItem
      items={[
        { value: 'option1', label: 'Option One' },
        { value: 'option2', label: 'Option two' },
        { value: 'option3', label: 'Option tree' },
      ]}
    />
  </div>
);

export const Default = Template.bind({});
Default.args = {};
