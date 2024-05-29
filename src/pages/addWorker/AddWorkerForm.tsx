'use client';

import { useRouter } from 'next/router';
import { useState } from 'react';

export default function AddWorkerForm() {
    const router = useRouter();
    const [formValues, setFormValues] = useState({
        MATRICULE: '',
        NOM_PRENOM: '',
        Cycle: '',
        Date_de_naissance: '',
        age: '',
        civilite: '',
        DROIT_CG: '',
        Situation_familiale: '',
        Chef_de_famille: '',
        CATEGORIE_PROFESSIONNELLE: '',
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            const res = await fetch('/api/workersdata', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formValues),
            });
            if (res.ok) {
                const result = await res.json();
                console.log('Worker added successfully', result);
                router.push('/dashboard'); // Redirect to workers list page after successful addition
            } else {
                const error = await res.json();
                console.error('Failed to add worker:', error.message);
            }
        } catch (error) {
            console.log('Error adding worker:', error);
        }
    };

    return (
        <>
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold text-teal-400">Ajouter un employé</h1>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                    onChange={handleChange}
                    value={formValues.MATRICULE}
                    name="MATRICULE"
                    className="input input-bordered input-accent w-full"
                    type="text"
                    placeholder="Matricule"
                    required
                />
                <input
                    onChange={handleChange}
                    value={formValues.NOM_PRENOM}
                    name="NOM_PRENOM"
                    className="input input-bordered input-accent w-full"
                    type="text"
                    placeholder="Nom Prenom"
                    required
                />
                <input
                    onChange={handleChange}
                    value={formValues.Cycle}
                    name="Cycle"
                    className="input input-bordered input-accent w-full"
                    type="text"
                    placeholder="Cycle de travail"
                    required
                />
                <input
                    onChange={handleChange}
                    value={formValues.Date_de_naissance}
                    name="Date_de_naissance"
                    className="input input-bordered input-accent w-full"
                    type="date"
                    placeholder="Date de naissance"
                    required
                />
                <input
                    onChange={handleChange}
                    value={formValues.age}
                    name="age"
                    className="input input-bordered input-accent w-full"
                    type="number"
                    placeholder="Age"
                    required
                />
                <input
                    onChange={handleChange}
                    value={formValues.civilite}
                    name="civilite"
                    className="input input-bordered input-accent w-full"
                    type="text"
                    placeholder="Civilite"
                    required
                />
                <input
                    onChange={handleChange}
                    value={formValues.DROIT_CG}
                    name="DROIT_CG"
                    className="input input-bordered input-accent w-full"
                    type="text"
                    placeholder="Droit_CG"
                    required
                />
                <input
                    onChange={handleChange}
                    value={formValues.Situation_familiale}
                    name="Situation_familiale"
                    className="input input-bordered input-accent w-full"
                    type="text"
                    placeholder="Situation familiale"
                    required
                />
                <input
                    onChange={handleChange}
                    value={formValues.Chef_de_famille}
                    name="Chef_de_famille"
                    className="input input-bordered input-accent w-full"
                    type="text"
                    placeholder="Chef de famille"
                    required
                />
                <input
                    onChange={handleChange}
                    value={formValues.CATEGORIE_PROFESSIONNELLE}
                    name="CATEGORIE_PROFESSIONNELLE"
                    className="input input-bordered input-accent w-full"
                    type="text"
                    placeholder="Categorie Professionnelle"
                />
                <button
                    type="submit"
                    className="btn btn-primary w-full mt-4"
                >
                    Ajouter
                </button>
            </form>
        </>
    );
}
