'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function updateWorkerPointage({
  id,
  id_pointage,
  entrée,
  sortie,
  regime,
}: any) {
  const [new_id_pointage, setid_pointage] = useState(id_pointage);
  const [newEntree, setNewEntree] = useState(entrée);
  const [newSortie, setNewSortie] = useState(sortie);
  const [newRegime, setNewRegime] = useState(regime);

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `http://localhost:4000/api/workersPointage/${id}`,
        {
          method: 'PUT',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify({
            new_id_pointage,
            newEntree,
            newSortie,
            newRegime,
          }),
        },
      );

      if (res.ok) {
        const result = await res.json();
        console.log('Data updated successfully', result);
      } else {
        const error = await res.json();
        console.error('Failed to update data:', error.message);
      }
    } catch (error) {
      console.log('Error updating data:', error);
    }
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="font-bold py-10 text-2xl">Update WorkerPointage</h1>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          onChange={(e) => setid_pointage(e.target.value)}
          value={new_id_pointage}
          className="input input-bordered input-accent w-full max-w-xs"
          type="number"
        />

        <input
          onChange={(e) => setNewEntree(e.target.value)}
          value={newEntree}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
        />

        <input
          onChange={(e) => setNewSortie(e.target.value)}
          value={newSortie}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
        />
        <input
          onChange={(e) => setNewRegime(e.target.value)}
          value={newRegime}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
        />
        <button className="btn btn-primary w-full max-w-xs">
          Update worker pointage
        </button>
      </form>
    </>
  );
}
