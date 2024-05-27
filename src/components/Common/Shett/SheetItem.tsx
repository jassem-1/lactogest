import {
  Sheet,
  SheetContent,
  SheetContentProps,
  SheetDescription,
  SheetDescriptionProps,
  SheetHeader,
  SheetHeaderProps,
  SheetProps,
  SheetTitle,
  SheetTitleProps,
} from '@/components/ui/Sheet';
import React from 'react';

export interface SheetItemsProps extends React.HTMLAttributes<HTMLDivElement> {
  SheetProps?: SheetProps;
  SheetContentProps?: SheetContentProps;
  SheetTitleProps?: SheetTitleProps;
  SheetDescriptionProps?: SheetDescriptionProps;
  SheetHeaderProps?: SheetHeaderProps;
  title: string;
  description: string;
  sheetContent: React.ReactNode;
  open: boolean;
}
export const SheetItem = ({
  SheetProps,
  SheetContentProps,
  SheetDescriptionProps,
  SheetHeaderProps,
  SheetTitleProps,
  title,
  description,
  sheetContent,
  open,
  ...rest
}: SheetItemsProps) => {
  return (
    <div {...rest}>
      <Sheet {...SheetProps} open={open}>
        <SheetContent
          {...SheetContentProps}
          className="min-w-[70%] max-md:min-w-[90%] max-sm:min-w-[100%] bg-card flex flex-col p-0 gap-0"
        >
          <SheetHeader {...SheetHeaderProps} className=" p-4 border-b">
            <SheetTitle {...SheetTitleProps}>{title}</SheetTitle>
            <SheetDescription {...SheetTitleProps}>
              {description}
            </SheetDescription>
          </SheetHeader>
          {sheetContent}
        </SheetContent>
      </Sheet>
    </div>
  );
};
