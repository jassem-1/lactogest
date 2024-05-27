import React from 'react';

import { RadioGroup as RadioGroupPrimitive, RadioGroupItem } from './Radio';
import { cn } from '@/utils/tailwind';

interface RadioGroupProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive> {
  options: { label: string; value: string }[];

  itemWrapperProps?: React.ComponentPropsWithoutRef<'div'>;
  itemProps?: React.ComponentPropsWithoutRef<typeof RadioGroupItem>;
  itemLabelProps?: React.ComponentPropsWithoutRef<'label'>;
}

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive>,
  RadioGroupProps
>(
  (
    {
      className,
      id,
      itemProps,
      itemWrapperProps,
      itemLabelProps,
      options,
      ...props
    },
    ref,
  ) => {
    const { className: itmWrapperClassName, ...restItemWrapperProps } =
      itemWrapperProps || {};

    return (
      <RadioGroupPrimitive
        className={cn('grid gap-2', className)}
        id={id}
        {...props}
        ref={ref}
      >
        {options.map(({ label, value }, idx) => (
          <div
            key={value}
            className={cn('flex items-center space-x-2', itmWrapperClassName)}
            {...restItemWrapperProps}
          >
            <RadioGroupItem
              value={value}
              id={`${id}-${idx}`}
              {...itemProps}
            ></RadioGroupItem>
            <label htmlFor={`${id}-${idx}`} {...itemLabelProps}>
              {label}
            </label>
          </div>
        ))}
      </RadioGroupPrimitive>
    );
  },
);
RadioGroup.displayName = RadioGroupPrimitive.displayName;

export { RadioGroup };
