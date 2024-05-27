import React, { FormEventHandler, ReactNode } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionContentProps,
  AccordionItem,
  AccordionItemProps,
  AccordionProps,
  AccordionTrigger,
  AccordionTriggerProps,
} from '../../ui';

export interface AccordionItemsProps
  extends React.HTMLAttributes<HTMLDivElement> {
  type: AccordionProps['type'];
  AccordionProps?: Omit<AccordionProps, 'type'>;
  AccordionItemProps?: AccordionItemProps;
  AccordionTriggerProps?: AccordionTriggerProps;
  AccordionContentProps?: AccordionContentProps;
  onChange?: () => void;
  items: {
    label: React.ReactNode;
    content: React.ReactNode | (() => React.ReactNode);
    value: string;
  }[];
}

export const AccordionItems = ({
  onChange,
  AccordionProps,
  AccordionItemProps,
  AccordionTriggerProps,
  AccordionContentProps,
  items,
  type,
  ...rest
}: AccordionItemsProps) => {
  return (
    <div {...rest}>
      {/* @ts-ignore */}
      <Accordion {...AccordionProps} type={type} onChange={onChange}>
        {items.map((item, i) => {
          return (
            <AccordionItem {...AccordionItemProps} value={item.value} key={i}>
              <AccordionTrigger {...AccordionTriggerProps}>
                {item.label}
              </AccordionTrigger>
              <AccordionContent {...AccordionContentProps}>
                <div>
                  {typeof item.content === 'function'
                    ? item.content()
                    : item.content}
                </div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};
