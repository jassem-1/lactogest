import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Label } from './Label';

export default {
  title: 'Components/Label',
  component: Label,
} as Meta;

const Template: StoryFn<React.ComponentPropsWithoutRef<typeof Label>> = (
  args,
) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Label exemple',
};
