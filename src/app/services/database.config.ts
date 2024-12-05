// db.js
import postgres from 'postgres';

const sql = postgres(
  'postgresql://postgres.udtvxxpmimeyjsrdlzaq:[YOUR-PASSWORD]@aws-0-eu-central-1.pooler.supabase.com:6543/postgres'
);

export default sql;
