'use client';

import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function updateWorker({
  H_Absences,
  H_Accidents,
  H_Maladie,
  H_Mise_a_payer,
  H_Autorisations,
  H_Théo,
  H_Missions,
  H_Repos_Comensateur,
  Total_Travail,
}: any) {
  //const [newMatricule, setNewMatricule] = useState(matricule);
  const [newH_Absences, setNewH_Absences] = useState(H_Absences);
  const [newH_Accidents, setNewH_Accidents] = useState(H_Accidents);
  const [newH_Maladie, setNewH_Maladie] = useState(H_Maladie);
  const [newH_Mise_a_payer, setNewH_Mise_a_payer] = useState(H_Mise_a_payer);
  const [newH_Autorisations, setNewH_Autorisations] = useState(H_Autorisations);
  const [newH_Théo, setNewH_Théo] = useState(H_Théo);
  const [newH_Missions, setNewH_Missions] = useState(H_Missions);
  const [newH_Repos_Comensateur, setNewH_Repos_Comensateur] =
    useState(H_Repos_Comensateur);
  const [newTotal_Travail, setNewTotal_Travail] = useState(Total_Travail);

  const router = useRouter();
  const { id } = router.query;
  console.log('id', id);
  console.log('h_absent', newH_Absences);

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
      const res = await fetch(`http://localhost:4000/api/workersabsent/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          newH_Absences,
          newH_Accidents,
          newH_Maladie,
          newH_Mise_a_payer,
          newH_Autorisations,
          newH_Théo,
          newH_Missions,
          newH_Repos_Comensateur,
          newTotal_Travail,
        }),
      });
      console.log(
        'This is res',
        JSON.stringify({
          newH_Absences,
          newH_Accidents,
          newH_Maladie,
          newH_Mise_a_payer,
          newH_Autorisations,
          newH_Théo,
          newH_Missions,
          newH_Repos_Comensateur,
          newTotal_Travail,
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
          onChange={(e) => setNewH_Absences(e.target.value)}
          value={newH_Absences}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
        />

        <input
          onChange={(e) => setNewH_Accidents(e.target.value)}
          value={newH_Accidents}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
        />
        <input
          onChange={(e) => setNewH_Maladie(e.target.value)}
          value={newH_Maladie}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
        />
        <input
          onChange={(e) => setNewH_Mise_a_payer(e.target.value)}
          value={newH_Mise_a_payer}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
        />

        <input
          onChange={(e) => setNewH_Autorisations(e.target.value)}
          value={newH_Autorisations}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
        />

        <input
          onChange={(e) => setNewH_Théo(e.target.value)}
          value={newH_Théo}
          className="input input-bordered input-accent w-full max-w-xs"
          type="numbre"
        />

        <input
          onChange={(e) => setNewH_Missions(e.target.value)}
          value={newH_Missions}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
        />
        <input
          onChange={(e) => setNewH_Repos_Comensateur(e.target.value)}
          value={newH_Repos_Comensateur}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
        />
        <input
          onChange={(e) => setNewTotal_Travail(e.target.value)}
          value={newTotal_Travail}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
        />
        <button
          onClick={() => console.log('clic')}
          type="submit"
          className="btn btn-primary w-full max-w-xs"
        >
          Update worker Absent
        </button>
      </form>
    </>
  );
}
