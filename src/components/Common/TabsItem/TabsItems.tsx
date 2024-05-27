import {
  Tabs,
  TabsContent,
  TabsList,
  TabsProps,
  TabsTrigger,
} from '@/components/ui';
import React from 'react';

export interface TabsItemsProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultValue: string;
  TabsProps?: TabsProps;
  items: {
    value: string;
    tabName: string;
    tabContent?: React.ReactNode;
  }[];
}

export const TabsItems = ({
  items,
  defaultValue,
  TabsProps,
  ...rest
}: TabsItemsProps) => {
  return (
    <div {...rest}>
      <Tabs {...TabsProps} defaultValue={defaultValue} className="w-1/3">
        <TabsList>
          {items.map((item) => {
            return (
              <>
                <TabsTrigger key={item.value} value={item.value}>
                  {item.tabName}
                </TabsTrigger>
              </>
            );
          })}
        </TabsList>
        {items.map((item) => {
          return (
            <>
              <TabsContent key={item.value} value={item.value}>
                {item.tabContent}
              </TabsContent>
            </>
          );
        })}
      </Tabs>
    </div>
  );
};
