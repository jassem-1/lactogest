// Example usage in a Next.js page to add data

import { useState } from "react"; //Importations : Le composant utilise React
//ainsi que le hook useState pour gérer l'état des données du formulaire.
export default function AddWorker() {
  //formData: est un objet qui contient les données du formulaire.
  //useState: Initialise l'état du formulaire avec les champs vides.
  const [formData, setFormData] = useState({
    matricule: "",
    name: "",
    cycle: "",
    category: "",
    droit: "",
    birth_date: "",
    age: "",
    civility: "",
    situation_familiale: "",
    chef_famille: "",
  })

  const handleChange = (e: any) => {
    //handleChange : Cette fonction est appelée à chaque fois est modifié.

    setFormData({ ...formData, [e.target.matricule]: e.target.value })
  }
  //e.target.value : Récupère la valeur du champ modifié.
  //setFormData : Met à jour l'état du formulaire en copiant toutes les données existantes
  //(...formData) et en remplaçant la valeur du champ modifié par la nouvelle valeur.
  const handleSubmit = async (e: any) => {
    // Cette fonction est appelée lorsque le formulaire est soumis.
    e.preventDefault() //Empêche le comportement par défaut du formulaire (rechargement de la page).
    try {
      const response = await fetch("http://localhost:4000/api/workersdata", {
        //Envoie une requête POST au serveur avec les données du formulaire au format JSON
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        //Vérifie si la réponse du serveur est OK Si c'est le cas, les données sont ajoutées avec succès et le résultat est affiché
        const result = await response.json() //Convertit la réponse du serveur en JSON.
        console.log("Data added successfully", result)
      } else {
        const error = await response.json()
        console.error("Failed to add data:", error.message)
      } //Si une erreur se produit lors de l'ajout des données, elle est affichée dans la console.
    } catch (error) {
      console.error("Error adding data:", error)
    }
  }
  //Affiche un formulaire avec un champ pour le nom du travailleur.
  return (
    <div>
      <h1>Add Data</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.matricule}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.cycle}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.category}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.droit}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.birth_date}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.age}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.civility}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.situation_familiale}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.chef_famille}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Add worker</button>
        <button onClick={AddWorker} className="btn btn-error ml-2">
          Add
        </button>
      </form>
    </div>
  )
}
//onChange : Appelle la fonction handleChange à chaque modification du champ.
//onSubmit : Appelle la fonction handleSubmit lorsque le formulaire est soumis.
