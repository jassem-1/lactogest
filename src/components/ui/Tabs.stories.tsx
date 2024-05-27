import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './Tabs';
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/Tabs',
  component: Tabs,
} as Meta;

const Template: StoryFn = (args) => (
  <Tabs defaultValue="account" className="w-1/3">
    <TabsList>
      <TabsTrigger value="account">Tab 1</TabsTrigger>
      <TabsTrigger value="password">Tab 2</TabsTrigger>
    </TabsList>
    <TabsContent value="account">Modifiez votre Tab 1 ici.</TabsContent>
    <TabsContent value="password">Modifiez votre Tab 2 ici.</TabsContent>
  </Tabs>
);

export const Default = Template.bind({});
