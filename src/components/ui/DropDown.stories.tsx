import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { DropDown, DropDownProps } from './DropDown';

export default {
  title: 'Components/DropDown',
  component: DropDown,
  argTypes: {
    onChange: { action: 'changed' },
  },
} as Meta;

const Template: StoryFn<DropDownProps> = (args) => {
  const handleChange = (selectedOption: string) => {
    console.log('Selected option:', selectedOption);
  };

  return (
    <div className="w-1/2">
      <DropDown {...args} onChange={handleChange} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Sélectionner une option',
  items: [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ],
};
