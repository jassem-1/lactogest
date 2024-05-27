import { Label } from '@/components/ui';
import React from 'react';

function admin() {
  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <div className="flex-1 flex flex-col p-8 overflow-auto">
        <div className="col-span-9">
          <header className="flex pb-6 flex-col">
            <h1 className="text-3xl font-bold text-teal-400">
              Dashboread admin
            </h1>
            <Label className="text-sm">Bienvenue sur votre dashboread</Label>
          </header>
        </div>
      </div>
    </div>
  );
}

export default admin;
