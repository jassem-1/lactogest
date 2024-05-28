import { Pool } from 'pg';

const pool = new Pool({
  host: 'localhost',
  port: '5432',
  user: 'postgres',
  password: '0000',
  database: 'TarakDB',
});

export default pool;
