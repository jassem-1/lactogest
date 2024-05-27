import {
  Popover,
  PopoverContent,
  PopoverContentProps,
  PopoverProps,
  PopoverTrigger,
  PopoverTriggerProps,
} from '@/components/ui';
import React, { FormEventHandler } from 'react';

export interface PopoverItemProps extends React.HTMLAttributes<HTMLDivElement> {
  popoverTrigger: React.ReactNode;
  popoverContent: React.ReactNode;
  PopoverProps?: PopoverProps;
  PopoverContentProps?: PopoverContentProps;
  PopoverTriggerProps?: PopoverTriggerProps;
}

export const PopoverItem = ({
  popoverTrigger,
  popoverContent,
  PopoverProps,
  PopoverTriggerProps,
  PopoverContentProps,
  ...rest
}: PopoverItemProps) => {
  return (
    <div {...rest}>
      <Popover {...PopoverProps}>
        <PopoverTrigger {...PopoverTriggerProps}>
          {popoverTrigger}
        </PopoverTrigger>
        <PopoverContent {...PopoverContentProps}>
          {popoverContent}
        </PopoverContent>
      </Popover>
    </div>
  );
};
