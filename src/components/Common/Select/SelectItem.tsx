import React, { FormEventHandler } from 'react';
import {
  Select,
  SelectContent,
  SelectContentProps,
  SelectItem,
  SelectItemProps,
  SelectProps,
  SelectTrigger,
  SelectTriggerProps,
  SelectValue,
  SelectValueProps,
} from '../../ui';

// @ts-ignore
export interface SelectItemsProps extends React.HTMLAttributes<HTMLDivElement> {
  selectProps?: SelectProps;
  SelectContentProps?: SelectContentProps;
  SelectTriggerProps?: SelectTriggerProps;
  SelectValueProps?: SelectValueProps;
  triggerClassName?: string;
  trigger?: React.ReactNode;
  onChange?: (value: string) => void;
  onValueChange?: (value: string) => void;
  placeholder: string;
  items: {
    content: React.ReactNode;
    value: string;
    props?: SelectItemProps;
  }[];
}

export const SelectItems = ({
  items,
  placeholder,
  selectProps,
  onChange,
  onValueChange,
  SelectTriggerProps,
  SelectContentProps,
  SelectValueProps,
  ...rest
}: SelectItemsProps) => {
  return (
    <div {...rest}>
      <Select {...selectProps} onValueChange={onValueChange}>
        <SelectTrigger {...SelectTriggerProps}>
          <SelectValue {...SelectValueProps} placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent {...SelectContentProps}>
          {items.map((item, idx) => {
            return (
              <SelectItem key={idx} value={item.value} {...item.props}>
                {item.content}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
};
