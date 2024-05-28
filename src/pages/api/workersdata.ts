// pages/api/data.js

let data: any = [];
import { NextResponse } from 'next/server';
import pool from '../../utils/postgres';

const fetchData = async () => {
  try {
    const client = await pool.connect();
    console.log('database connected');
    const result = await client.query('SELECT * FROM public."Dim_Employe" ORDER BY "MATRICULE" ASC');
    const data = result.rows;
    console.log('fetch data >>>>', data);
    return data;
    client.release();
    //return NextResponse.json(result.rows[1].NOM_PRENOM);
  } catch (error) {
    console.error('error fetching DB', error);
    throw error;
  }
};

fetchData()
  .then((data) => {
    console.log('recevedata', data);
  })
  .catch((error) => {
    console.error('error fetching', error);
  });

export default async function handler(req, res) {
  const { method, body } = req;

  try {
    let data = await fetchData();
    console.log('Handler data:', data);

    switch (method) {
      case 'GET':
        res.status(200).json(data);
        break;
      case 'POST':
        const { MATRICULE, NOM_PRENOM, Cycle, Date_de_naissance, age, civilite, DROIT_CG, Situation_familiale, Chef_de_famille, CATEGORIE_PROFESSIONNELLE } = body;
        const client = await pool.connect();
        const result = await client.query('INSERT INTO public."Dim_Employe" ("MATRICULE", "NOM_PRENOM", "Cycle", "Date_de_naissance", "age", "civilite", "DROIT_CG", "Situation_familiale", "Chef_de_famille", "CATEGORIE_PROFESSIONNELLE") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *', [MATRICULE, NOM_PRENOM, Cycle, Date_de_naissance, age, civilite, DROIT_CG, Situation_familiale, Chef_de_famille, CATEGORIE_PROFESSIONNELLE]);
        const newWorker = result.rows[0];
        client.release();
        res.status(201).json(newWorker);
        break;
      case 'PUT':
        const { id, text, completed } = body;
        const index = data.findIndex((myData: any) => myData.id === id);
        if (index !== -1) {
          data[index] = { id, text, completed };
          res.status(200).json(data[index]);
        } else {
          res.status(404).json({ message: 'myData not found' });
        }
        break;
      case 'DELETE':
        data = data.filter((myData: any) => myData.id !== body.id);
        res.status(200).json({ message: 'myData deleted successfully' });
        break;
      default:
        res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (error) {
    console.error('Error handling request:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
