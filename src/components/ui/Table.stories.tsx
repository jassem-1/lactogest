import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './Table';

export default {
  title: 'Components/Table',
  component: Table,
} as Meta;

const Template: StoryFn = (args) => (
  <Table {...args}>
    <TableCaption>Une simple tableau</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead>Header 1</TableHead>
        <TableHead>Header 2</TableHead>
        <TableHead>Header 3</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell>Rangée 1, cellule 1</TableCell>
        <TableCell>Rangée 1, cellule 2</TableCell>
        <TableCell>Rangée 1, cellule 3</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Rangée 2, cellule 1</TableCell>
        <TableCell>Rangée 2, cellule 2</TableCell>
        <TableCell>Rangée 2, cellule 3</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Rangée 3, cellule 1</TableCell>
        <TableCell>Rangée 3, cellule 2</TableCell>
        <TableCell>Rangée 3, cellule 3</TableCell>
      </TableRow>
    </TableBody>
  </Table>
);

export const Default = Template.bind({});
