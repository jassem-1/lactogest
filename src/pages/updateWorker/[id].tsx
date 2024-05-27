'use client';

import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function updateWorker({
  name,
  cycle,
  category,
  droit,
  birth_date,
  age,
  civility,
  situation_familiale,
  chef_famille,
}: any) {
  //const [newMatricule, setNewMatricule] = useState(matricule);
  const [newName, setNewName] = useState(name);
  const [newCycle, setNewCycle] = useState(cycle);
  const [newCategory, setNewCategory] = useState(category);
  const [newDroit, setNewDroit] = useState(droit);
  const [newBirthDate, setNewBirthDate] = useState(birth_date);
  const [newAge, setNewAge] = useState(age);
  const [newCivility, setNewCivility] = useState(civility);
  const [newsituation_familiale, setNewsituation_familiale] =
    useState(situation_familiale);
  const [newchef_famille, setNewchef_famille] = useState(chef_famille);

  const router = useRouter();
  const { id } = router.query;
  console.log('id', id);
  console.log('Name', newName);

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
      const res = await fetch(`http://localhost:4000/api/workers/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          newName,
          newCycle,
          newCategory,
          newDroit,
          newBirthDate,
          newAge,
          newCivility,
          newsituation_familiale,
          newchef_famille,
        }),
      });
      console.log(
        'This is res',
        JSON.stringify({
          newName,
          newCycle,
          newCategory,
          newDroit,
          newBirthDate,
          newAge,
          newCivility,
          newsituation_familiale,
          newchef_famille,
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
          onChange={(e) => setNewName(e.target.value)}
          value={newName}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
        />

        <input
          onChange={(e) => setNewBirthDate(e.target.value)}
          value={newBirthDate}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
        />
        <input
          onChange={(e) => setNewAge(e.target.value)}
          value={newAge}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
        />
        <input
          onChange={(e) => setNewCategory(e.target.value)}
          value={newCategory}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
        />

        <input
          onChange={(e) => setNewCycle(e.target.value)}
          value={newCycle}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
        />

        <input
          onChange={(e) => setNewDroit(e.target.value)}
          value={newDroit}
          className="input input-bordered input-accent w-full max-w-xs"
          type="numbre"
        />

        <input
          onChange={(e) => setNewCivility(e.target.value)}
          value={newCivility}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
        />
        <input
          onChange={(e) => setNewsituation_familiale(e.target.value)}
          value={newsituation_familiale}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
        />
        <input
          onChange={(e) => setNewchef_famille(e.target.value)}
          value={newchef_famille}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
        />
        <button
          onClick={() => console.log('clic')}
          type="submit"
          className="btn btn-primary w-full max-w-xs"
        >
          Update worker
        </button>
      </form>
    </>
  );
}
