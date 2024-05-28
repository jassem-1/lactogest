import { Pool } from 'pg';

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'jass',
  database: 'TarakDB',
});

export default async function handler(req: any, res: any) {
  const { id } = req.query;

  if (req.method === 'PUT') {
    // Update operation
    const {
      newName,
      newCycle,
      newCategory,
      newDroit,
      newBirthDate,
      newAge,
      newCivility,
      newsituation_familiale,
      newchef_famille,
    } = req.body;
    try {
      const client = await pool.connect();
      console.log('id from query', id);
      console.log('name from query', newName);

      const result = await client.query(
        'UPDATE public."Dim_Employe" SET "NOM_PRENOM" = $1, "Cycle" = $2, "CATEGORIE_PROFESSIONNELLE" = $3, "DROIT_CG" = $4, "Date_de_naissance" = $5, "age" = $6, "civilite" = $7, "Situation_familiale" = $8, "Chef_de_famille" = $9 WHERE "MATRICULE" = $10 RETURNING *',
        [
          newName,
          newCycle,
          newCategory,
          newDroit,
          newBirthDate,
          newAge,
          newCivility,
          newsituation_familiale,
          newchef_famille,
          id,
        ]
      );
      client.release();
      res.status(200).json(result.rows[0]);
    } catch (err) {
      console.error('Error executing query', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else if (req.method === 'GET') {
    // Read operation
    try {
      const client = await pool.connect();
      const result = await client.query(
        'SELECT * FROM public."Dim_Employe" WHERE "MATRICULE" = $1',
        [id]
      );
      client.release();
      if (result.rows.length > 0) {
        res.status(200).json(result.rows[0]);
      } else {
        res.status(404).json({ message: 'Record not found' });
      }
    } catch (err) {
      console.error('Error executing query', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else if (req.method === 'DELETE') {
    // Delete operation
    try {
      const client = await pool.connect();
      const result = await client.query(
        'DELETE FROM public."Dim_Employe" WHERE "MATRICULE" = $1 RETURNING *',
        [id]
      );
      client.release();
      if (result.rowCount && result.rowCount > 0) {
        res.status(200).json(result.rows[0]);
      } else {
        res.status(404).json({ message: 'Record not found' });
      }
    } catch (err) {
      console.error('Error executing query', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
