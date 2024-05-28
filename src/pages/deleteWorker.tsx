'use client';

import { useRouter } from 'next/navigation'; //Importation du hook useRouter depuis la bibliothèque next/navigation.
//Ce hook est utilisé pour la navigation dans l'application Next.js.

export default function DeleteWorker({ id }: any) {
  //Cette fonction prend un objet { id } comme argument.
  const router = useRouter(); //router: Utilisation du hook
  //useRouter pour obtenir un objet router qui permettra la navigation.

  const deleteWorker = async () => {
    //elle effectue une requête réseau
    const confirmed = confirm('Are you sure?');

    if (confirmed) {
      const res = await fetch(`http://localhost:4000/api/workers/${id}`, {
        method: 'DELETE',
        //Une requête est envoyée à l'API avec la méthode DELETE pour
        //supprimer le travailleur spécifié par son identifiant (id).
      });

      if (res.ok) {
        //Si la suppression est réussie (le statut de réponse est ok),
        router.refresh(); // la page est actualisée (router.refresh()).
      }
    }
  };

  return (
    <button onClick={deleteWorker} className="btn btn-error ml-2">
      Delete
    </button> //Lorsque ce bouton est cliqué, la fonction deleteWorker est appelée.
  );
}
