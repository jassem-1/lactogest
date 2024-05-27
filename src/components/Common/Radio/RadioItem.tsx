import { Label } from '@/components/ui';
import {
  RadioGroup,
  RadioGroupItem,
  RadioGroupItemProps,
  RadioGroupProps,
} from '@/components/ui/Radio';
import React, { FormEventHandler } from 'react';

export interface RadioItemsProps extends React.HTMLAttributes<HTMLDivElement> {
  RadioGroupItemProps?: RadioGroupItemProps;
  RadioGroupProps?: RadioGroupProps;
  onChange?: FormEventHandler<HTMLDivElement>;
  items: {
    label: React.ReactNode;
    value: string;
  }[];
}

export const RadioItem = ({
  RadioGroupProps,
  RadioGroupItemProps,
  onChange,
  items,
  ...rest
}: RadioItemsProps) => {
  return (
    <div {...rest}>
      <RadioGroup {...RadioGroupProps}>
        {items.map((item, index) => {
          return (
            <div className="flex" key={index}>
              <RadioGroupItem
                {...RadioGroupItemProps}
                value={item.value}
              ></RadioGroupItem>
              <Label className="ml-2">{item.label}</Label>
            </div>
          );
        })}
      </RadioGroup>
    </div>
  );
};
