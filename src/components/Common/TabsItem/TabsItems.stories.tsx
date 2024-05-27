import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { TabsItems } from '.';

export default {
  title: 'Common/TabsItems',
  component: TabsItems,
} as Meta;

const Template: StoryFn = (args) => (
  <div>
    <TabsItems
      defaultValue="account"
      items={[
        {
          value: 'account',
          tabName: 'Tab 1',
          tabContent: <p>Modifiez votre Tab 1 ici.</p>,
        },
        {
          value: 'tab2',
          tabName: 'Tab 2',
          tabContent: <p>Modifiez votre Tab 2 ici.</p>,
        },
        {
          value: 'tab3',
          tabName: 'Tab 3',
          tabContent: <p>Modifiez votre Tab 3 ici.</p>,
        },
      ]}
    />
  </div>
);

export const Default = Template.bind({});
Default.args = {};
