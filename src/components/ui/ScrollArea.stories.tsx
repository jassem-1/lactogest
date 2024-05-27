import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ScrollArea } from './ScrollArea';
import { Label } from '.';
import { Separator } from './Separator';

export default {
  title: 'Components/ScrollArea',
  component: ScrollArea,
} as Meta;

const Template: StoryFn = (args) => (
  <ScrollArea className="w-1/2 h-[270px] rounded-md border p-4">
    <Label className="text-md font-normal text-black">ScrollArea exemple</Label>
    <Separator className="mt-4" />
    <div className="mb-2 mt-2">
      <Label>Niveau de rubrique : Titre principal</Label>
    </div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor
      sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet,
      consectetur adipiscing elit.
    </p>

    <div className="mb-2 mt-2">
      <Label>Niveau de rubrique : Titre de la section</Label>
    </div>
    <p>
      Pellentesque habitant morbi tristique senectus et netus et malesuada fames
      ac turpis egestas, consectetur adipiscing elit, Lorem ipsum dolor sit
      amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur
      adipiscing elit, consectetur adipiscing elit, Lorem ipsum dolor sit amet,
      consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur
      adipiscing elit.
    </p>

    <div className="mb-2 mt-2">
      <Label>Niveau de rubrique : un autre titre de section</Label>
    </div>
    <p>
      Nulla facilisi. Ut fringilla. Suspendisse potenti, consectetur adipiscing
      elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum
      dolor sit amet, consectetur adipiscing elit, consectetur adipiscing elit,
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor
      sit amet, consectetur adipiscing elit.
    </p>

    <div className="mb-2 mt-2">
      <Label>Niveau de l&apos;intitulé : Plus de contenu</Label>
    </div>
    <p>
      Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin
      quam. Etiam ultrices, consectetur adipiscing elit, Lorem ipsum dolor sit
      amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur
      adipiscing elit, consectetur adipiscing elit, Lorem ipsum dolor sit amet,
      consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur
      adipiscing elit.
    </p>

    <div className="mb-2 mt-2">
      <Label>Niveau de l&apos;en-tête : Titre de la section finale</Label>
    </div>
    <p>
      Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod
      lacus luctus magna, consectetur adipiscing elit, Lorem ipsum dolor sit
      amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur
      adipiscing elit, consectetur adipiscing elit, Lorem ipsum dolor sit amet,
      consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur
      adipiscing elit, consectetur adipiscing elit, Lorem ipsum dolor sit amet,
      consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur
      adipiscing elit.
    </p>
  </ScrollArea>
);

export const Default = Template.bind({});
