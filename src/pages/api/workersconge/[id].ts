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
      newcg_sans_solde,
      newcg_expcionnel,
      newcg_circonsition,
      newMarriage,
      newNaissance,
      newDéces,
      newJcp_Pris,
      newJour_Ferier,
    } = req.body;
    try {
      const client = await pool.connect();
      console.log('id from query', id);
      console.log('cg sans solde from query', newcg_sans_solde);

      const result = await client.query(
        'UPDATE public."FACT" SET "CG_AUT_SANS_SOLDE_Jour" = $1, "CONGES_EXCEPTIONNEL_Jour" = $2, "CIRCONSITION_Jour" = $3, "CG_MAR_Jour" = $4, "NAISSANCE_Jour" = $5, "DECES_Jour" = $6, "JCP_PRIS_Jour" = $7, "H_JF_Jour" = $8 WHERE "MATRICULE" = $9 RETURNING *',
        [
          newcg_sans_solde,
          newcg_expcionnel,
          newcg_circonsition,
          newMarriage,
          newNaissance,
          newDéces,
          newJcp_Pris,
          newJour_Ferier,
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
        'SELECT * FROM public."FACT" WHERE "MATRICULE" = $1',
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
        'DELETE FROM public."FACT" WHERE "MATRICULE" = $1 RETURNING *',
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
