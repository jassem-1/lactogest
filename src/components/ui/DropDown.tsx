import React, { useEffect } from 'react';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuPortal,
} from './DropDownMenu';
import { Button } from './Button';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/utils/tailwind';

export interface DropDownProps {
  triggerClassName?: string;
  trigger?: React.ReactNode;
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
  items: {
    label: string;
    value: string;
    disabled?: boolean;
    description?: string;
  }[];
}

export const DropDown = ({
  triggerClassName,
  trigger,
  value,
  placeholder,
  onChange,
  items,
  disabled,
}: DropDownProps) => {
  const [localValue, setLocalValue] = React.useState(value);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger disabled={disabled} autoFocus={false} asChild>
        {!trigger ? (
          <Button
            className={cn(
              'w-full rounded-md normal-case font-normal hover:!border-primary text-sm text-muted-foreground inline-flex justify-between',
              triggerClassName,
            )}
            variant="outline"
          >
            {items.find((it) => it.value === localValue)?.label || placeholder}
            <ChevronDown size={18} />
          </Button>
        ) : (
          trigger
        )}
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent
          align="start"
          className="max-h-60 overflow-y-auto w-56 p-0 py-2"
        >
          {items.map((item) => (
            <DropdownMenuCheckboxItem
              key={item.value}
              className="py-2"
              checked={item.value === localValue}
              disabled={item.disabled}
              onCheckedChange={(v) => {
                setLocalValue(v ? item.value : '');
                onChange ? onChange(v ? item.value : '') : null;
              }}
            >
              <div>
                <p>{item.label}</p>
                {item.description && (
                  <p className="text-xs text-muted-foreground italic">
                    {item.description}
                  </p>
                )}
              </div>
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  );
};

export default DropDown;
