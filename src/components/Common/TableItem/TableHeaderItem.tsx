import {
  TableCaption,
  TableCaptionProps,
  TableHead,
  TableHeadProps,
  TableHeader,
  TableHeaderProps,
  TableRow,
  TableRowProps,
} from '@/components/ui';
import React from 'react';

export interface TableHeaderItemProps
  extends React.HTMLAttributes<HTMLDivElement> {
  TableHeaderProps?: TableHeaderProps;
  TableRowProps?: TableRowProps;
  TableHeadProps?: TableHeadProps;
  TableCaptionProps?: TableCaptionProps;
  tableCaption?: string;
  headValues: React.ReactNode[];
}

export const TableHeaderItem = ({
  TableHeaderProps,
  TableRowProps,
  TableCaptionProps,
  TableHeadProps,
  headValues,
  tableCaption,
  ...rest
}: TableHeaderItemProps) => {
  return (
    <>
      <TableCaption {...TableCaptionProps}>{tableCaption}</TableCaption>
      <TableHeader {...TableHeaderProps}>
        <TableRow {...TableRowProps}>
          {headValues.map((item, index) => {
            return (
              <TableHead {...TableHeadProps} key={index}>
                {item}
              </TableHead>
            );
          })}
        </TableRow>
      </TableHeader>
    </>
  );
};
