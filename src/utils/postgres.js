import { Pool } from 'pg';

const pool = new Pool({
  host: 'localhost',
  port: '5432',
  user: 'postgres',
  password: 'jass',
  database: 'TarakDB',
});

export const query = (text, params) => pool.query(text, params);

export default pool;
