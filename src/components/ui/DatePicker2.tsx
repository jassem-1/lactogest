import React, { useEffect, useMemo } from 'react';

import { Input } from './Input';
import { Popover, PopoverContent, PopoverTrigger } from './Popover';
import { Calendar, CalendarProps } from './Calendar';

import { CalendarIcon } from 'lucide-react';

import { format } from 'date-fns';
import fr from 'date-fns/locale/fr';

import { cn } from '@/utils/tailwind';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onValueChange?: (value: string) => void;
  calendarProps?: CalendarProps;
  error?: boolean;
}

const DatePicker2 = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      onBlur,
      onValueChange,
      value: _value,
      calendarProps,
      error,
      ...props
    },
    ref,
  ) => {
    const [value, setValue] = React.useState(_value as string);
    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      onValueChange && onValueChange(value);
      onBlur && onBlur(e);
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };

    const selectedDate = useMemo(() => {
      if (!value) {
        return undefined;
      }
      return new Date(value);
    }, [value]);

    useEffect(() => {
      if (_value) {
        setValue(_value as string);
      }
    }, [_value]);

    return (
      <Popover modal>
        <PopoverTrigger asChild>
          <div className="relative w-full">
            <Input
              className={cn(
                'rounded-md focus-visible:ring-0 focus-visible:ring-ring focus-visible:border-primary focus-visible:ring-offset-0',
                error &&
                  'border-red-600 focus-visible:ring-0 focus-visible:ring-ring focus-visible:border-red-600 focus-visible:ring-offset-0',
                className,
              )}
              onBlur={handleBlur}
              type={'date'}
              onClick={(e) => {
                e.stopPropagation();
              }}
              ref={ref}
              value={value}
              onChange={(e) => {
                onChange(e);
              }}
              {...props}
            />
            <div className="absolute flex right-0 top-0 h-full bg-background w-10 justify-center items-center z-50">
              <CalendarIcon
                className={cn(
                  'h-4 w-4 cursor-pointer bg-card text-muted-foreground',
                  error && 'text-red-600',
                )}
              />
            </div>
          </div>
        </PopoverTrigger>
        <PopoverContent align="start" className="w-auto p-0">
          <Calendar
            // locale={fr}
            mode="single"
            selected={selectedDate}
            defaultMonth={selectedDate}
            month={selectedDate}
            classNames={{
              caption_dropdowns: 'w-full justify-center items-start flex gap-2',
              vhidden: 'hidden',
              // caption: 'bg-red-500 ',
              caption_label: 'hidden',
              // dropdown_month: 'hidden',
              // nav: '!bg-red-500',
              dropdown: '!bg-card',
            }}
            captionLayout="dropdown-buttons"
            fromYear={1890}
            toYear={2200}
            onMonthChange={(month) => {
              if (month) {
                setValue(format(month, 'yyyy-MM-dd'));
                onValueChange && onValueChange(format(month, 'yyyy-MM-dd'));
              }
            }}
            onDayClick={(day) => {
              if (format(day, 'yyyy-MM-dd') === _value) {
                setValue('');
                onValueChange && onValueChange('');
              }
            }}
            //@ts-ignore
            onSelect={(date) => {
              if (date) {
                setValue(format(date, 'yyyy-MM-dd'));
                onValueChange && onValueChange(format(date, 'yyyy-MM-dd'));
              }
            }}
            initialFocus={true}
            {...calendarProps}
          />
        </PopoverContent>
      </Popover>
    );
  },
);

DatePicker2.displayName = 'DatePicker2';

export { DatePicker2 };
