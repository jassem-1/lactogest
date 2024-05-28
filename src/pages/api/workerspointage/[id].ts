import { Pool } from 'pg';

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: '0000',
  database: 'TarakDB',
});

export default async function handler(req: any, res: any) {
  const { id } = req.query;

  if (req.method === 'PUT') {
    // Update operation
    const { newEntree, newSortie, newRegime } = req.body;
    try {
      const client = await pool.connect();
      console.log('id from query', id);
      console.log('entree from query', newEntree);

      const result = await client.query(
        'UPDATE public."Dim_Pointage" SET "ENTREE_1" = $1, "SORTIE_1" = $2, "REGIME" = $3 WHERE "ID_Pointage" = $4 RETURNING *',
        [newEntree, newSortie, newRegime, id],
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
        'SELECT * FROM public."Dim_Pointage" WHERE "ID_Pointage" = $1',
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
        'DELETE FROM public."Dim_Pointage" WHERE "ID_Pointage" = $1 RETURNING *',
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
