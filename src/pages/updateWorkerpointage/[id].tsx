'use client';

import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function updateWorker({ Entree, Sortie, Regime }: any) {
  //const [newMatricule, setNewMatricule] = useState(matricule);
  const [newEntree, setNewEntree] = useState(Entree);
  const [newSortie, setNewSortie] = useState(Sortie);
  const [newRegime, setNewRegime] = useState(Regime);

  const router = useRouter();
  const { id } = router.query;
  console.log('id', id);
  console.log('Name', newEntree);

  /* setNewName(name);
  setNewCycle(cycle);
  setNewCategory(category);
  setNewDroit(droit);
  setNewBirthDate(birth_date);
  setNewAge(age);
  setNewCivility(civility);
  setNewsituation_familiale(situation_familiale);
  setNewchef_famille(chef_famille);*/

  /* useEffect(() => {
    //setNewMatricule(matricule);

  }, [name, cycle, category, droit, birth_date, age, civility,situation_familiale,chef_famille]);*/

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `http://localhost:4000/api/workerspointage/${id}`,
        {
          method: 'PUT',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify({ newEntree, newSortie, newRegime }),
        },
      );
      console.log(
        'This is res',
        JSON.stringify({ newEntree, newSortie, newRegime }),
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
        <h1 className="text-3xl font-bold text-teal-400">Update Worker</h1>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
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

        <button
          onClick={() => console.log('clic')}
          type="submit"
          className="btn btn-primary w-full max-w-xs"
        >
          Update worker Pointage
        </button>
      </form>
    </>
  );
}
