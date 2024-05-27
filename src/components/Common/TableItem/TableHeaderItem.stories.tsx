import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { TableHeaderItem } from './TableHeaderItem';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui';

export default {
  title: 'Common/TableHeaderItem',
  component: TableHeaderItem,
} as Meta;

const Template: StoryFn = (args) => (
  <div>
    <Table>
      <TableHeaderItem
        headValues={['Header 1', 'Header 2', 'Header 3']}
        {...args}
      />
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
  </div>
);

export const Default = Template.bind({});
Default.args = {};
