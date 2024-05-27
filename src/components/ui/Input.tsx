import * as React from 'react';

import { cn } from '@/utils/tailwind';
import { LabelProps } from '@radix-ui/react-label';
import { Label } from './Label';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';

export interface TextFieldProps extends InputProps {
  ContainerProps?: React.HTMLAttributes<HTMLDivElement>;
  label?: React.ReactNode;
  LabelProps?: LabelProps;
  helperText?: React.ReactNode;
  HelperTextProps?: React.HTMLAttributes<HTMLParagraphElement>;
  showPasswordVisibility?: boolean;
  error?: React.ReactNode;
}

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      // variant = 'default',
      ContainerProps,
      label,
      LabelProps,
      helperText,
      HelperTextProps,
      id,
      required,
      disabled,
      onFocus,
      onBlur,
      className,
      // endIcon,
      // startIcon,
      type,
      showPasswordVisibility,
      error,
      ...props
    },
    ref,
  ) => {
    const { className: containerClassName, ...containerProps } =
      ContainerProps || {};

    const { className: labelClassName, ...labelProps } = LabelProps || {};

    const { className: helperTextClassName, ...helperTextProps } =
      HelperTextProps || {};

    return (
      <div className={cn('w-full ', containerClassName)} {...containerProps}>
        {label && (
          <Label
            htmlFor={id}
            className={cn(
              'ml-1 text-sm text-muted-foreground font-normal',
              { 'text-muted-foreground': disabled },
              labelClassName,
            )}
            {...labelProps}
          >
            {label} {required && <span className="text-red-600">*</span>}
          </Label>
        )}
        <div className="relative">
          <Input
            ref={ref}
            id={id}
            disabled={disabled}
            onFocus={onFocus}
            onBlur={onBlur}
            className={cn(
              {
                'mt-1': Boolean(label),
                'border-red-600 focus-visible:ring-0': Boolean(error),
              },
              className,
            )}
            type={type}
            {...props}
          />
        </div>
        {error && typeof error == 'string' ? (
          <p
            className={cn(
              'text-sm text-muted-foreground mt-1 ml-1',
              { 'text-red-600': Boolean(error) },
              helperTextClassName,
            )}
            {...helperTextProps}
          >
            {error}
          </p>
        ) : Boolean(error) ? (
          error
        ) : null}
      </div>
    );
  },
);
TextField.displayName = 'TextField';

export { Input, TextField };
