import React from 'react';
import { RadioGroup, RadioGroupItem } from './Radio';
import { Meta } from '@storybook/react';
import { Label } from '.';

export default {
  title: 'Components/RadioGroup',
  component: RadioGroup,
} as Meta;

const Template = (args: any) => (
  <div className="ml-2">
    <RadioGroup {...args}>
      <RadioGroupItem value="option1">
        <Label htmlFor="option-one">Option One</Label>
      </RadioGroupItem>
      <RadioGroupItem value="option2">
        <Label htmlFor="option-two">Option two</Label>
      </RadioGroupItem>
      <RadioGroupItem value="option3">
        <Label htmlFor="option-tree">Option tree</Label>
      </RadioGroupItem>
    </RadioGroup>
  </div>
);

export const Default = Template.bind({});
