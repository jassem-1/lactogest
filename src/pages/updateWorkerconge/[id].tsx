'use client';

import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function updateWorker({
  cg_sans_solde,
  cg_expcionnel,
  cg_circonsition,
  Marriage,
  Naissance,
  Déces,
  Jcp_Pris,
  Jour_Ferier,
}: any) {
  //const [newMatricule, setNewMatricule] = useState(matricule);
  const [newcg_sans_solde, setNewcg_sans_solde] = useState(cg_sans_solde);
  const [newcg_expcionnel, setNewcg_expcionnel] = useState(cg_expcionnel);
  const [newcg_circonsition, setNewcg_circonsition] = useState(cg_circonsition);
  const [newMarriage, setNewMarriage] = useState(Marriage);
  const [newNaissance, setNewNaissance] = useState(Naissance);
  const [newDéces, setNewDéces] = useState(Déces);
  const [newJcp_Pris, setNewJcp_Pris] = useState(Jcp_Pris);
  const [newJour_Ferier, setNewJour_Ferier] = useState(Jour_Ferier);

  const router = useRouter();
  const { id } = router.query;
  console.log('id', id);
  console.log('name', newcg_sans_solde);

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
      const res = await fetch(`http://localhost:4000/api/workersconge/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          newcg_sans_solde,
          newcg_expcionnel,
          newcg_circonsition,
          newMarriage,
          newNaissance,
          newDéces,
          newJcp_Pris,
          newJour_Ferier,
        }),
      });
      console.log(
        'This is res',
        JSON.stringify({
          newcg_sans_solde,
          newcg_expcionnel,
          newcg_circonsition,
          newMarriage,
          newNaissance,
          newDéces,
          newJcp_Pris,
          newJour_Ferier,
        }),
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
          onChange={(e) => setNewcg_sans_solde(e.target.value)}
          value={newcg_sans_solde}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
        />

        <input
          onChange={(e) => setNewcg_expcionnel(e.target.value)}
          value={newcg_expcionnel}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
        />
        <input
          onChange={(e) => setNewcg_circonsition(e.target.value)}
          value={newcg_circonsition}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
        />
        <input
          onChange={(e) => setNewMarriage(e.target.value)}
          value={newMarriage}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
        />

        <input
          onChange={(e) => setNewNaissance(e.target.value)}
          value={newNaissance}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
        />

        <input
          onChange={(e) => setNewDéces(e.target.value)}
          value={newDéces}
          className="input input-bordered input-accent w-full max-w-xs"
          type="numbre"
        />

        <input
          onChange={(e) => setNewJcp_Pris(e.target.value)}
          value={newJcp_Pris}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
        />
        <input
          onChange={(e) => setNewJour_Ferier(e.target.value)}
          value={newJour_Ferier}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
        />

        <button
          onClick={() => console.log('clic')}
          type="submit"
          className="btn btn-primary w-full max-w-xs"
        >
          Update worker Conge
        </button>
      </form>
    </>
  );
}
