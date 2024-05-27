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
      newH_Absences,
      newH_Accidents,
      newH_Maladie,
      newH_Mise_a_payer,
      newH_Autorisations,
      newH_Théo,
      newH_Missions,
      newH_Repos_Comensateur,
      newTotal_Travail,
    } = req.body;
    try {
      const client = await pool.connect();
      console.log('id from query', id);
      console.log('h_absence from query', newH_Absences);

      const result = await client.query(
        'UPDATE public."fact" SET "H_ABS_Jour" = $1, "H_ACC_Jour" = $2, "H_MAL_Jour" = $3, "H_MAP_Jour" = $4, "H_AUTO_Jour" = $5, "THEO_NR_Jour" = $6, "H_MISS_Jour" = $7, "REPOS_COMPENSATEUR_Jour" = $8, "T_TRAVAIL_Jour" = $9 WHERE "MATRICULE" = $10 RETURNING *',
        [
          newH_Absences,
          newH_Accidents,
          newH_Maladie,
          newH_Mise_a_payer,
          newH_Autorisations,
          newH_Théo,
          newH_Missions,
          newH_Missions,
          newH_Repos_Comensateur,
          newTotal_Travail,
          id,
        ],
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
        'SELECT * FROM public."fact" WHERE "MATRICULE" = $1',
        [id],
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
        'DELETE FROM public."fact" WHERE "MATRICULE" = $1 RETURNING *',
        [id],
      );
      client.release();
      if (result.rowCount > 0) {
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
