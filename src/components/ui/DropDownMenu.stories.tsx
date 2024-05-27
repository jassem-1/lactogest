import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  MenuProps,
} from './DropDownMenu';
import { Meta, StoryFn } from '@storybook/react';
import { cn } from '@/utils/tailwind';
import { Home, LogOut, UserIcon } from 'lucide-react';

export default {
  title: 'Components/DropdownMenu',
  component: DropdownMenu,
  subcomponents: {
    DropdownMenuContent,
    DropdownMenuTrigger,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
  },
  argTypes: {},
} as Meta;

const Template: StoryFn<MenuProps> = (args) => (
  <DropdownMenu {...args}>
    <DropdownMenuTrigger className="ml-4">Cliquez ici</DropdownMenuTrigger>
    <DropdownMenuContent className="ml-4" align="end">
      <DropdownMenuLabel>
        <p className="text-lg">Bonjour</p>
      </DropdownMenuLabel>
      <DropdownMenuItem className={cn('rounded-md min-w-[13rem] py-2')}>
        <Home size={18} className="mr-4" />
        Accueil
      </DropdownMenuItem>
      <DropdownMenuSeparator />

      <DropdownMenuItem className={cn('rounded-md min-w-[13rem] py-2')}>
        <UserIcon size={18} className="mr-4" />
        Profil
      </DropdownMenuItem>

      <DropdownMenuItem className={cn('rounded-md min-w-[13rem] py-2')}>
        <LogOut size={18} className="mr-4" />
        <span>Quitter</span>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

export const Default = Template.bind({});
Default.args = {};
