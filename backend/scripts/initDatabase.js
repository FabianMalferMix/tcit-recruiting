const { Client } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const dbName = process.env.PGDATABASE || 'postsdb';

const client = new Client({
  user: process.env.PGUSER || 'postgres',
  password: process.env.PGPASSWORD || '',
  host: process.env.PGHOST || 'localhost',
  port: process.env.PGPORT || 5432,
  database: 'postgres',
});

async function createDatabase() {
  try {
    await client.connect();

    const res = await client.query(`SELECT 1 FROM pg_database WHERE datname = '${dbName}'`);
    if (res.rowCount === 0) {
      await client.query(`CREATE DATABASE ${dbName}`);
      console.log(`Base de datos '${dbName}' creada exitosamente`);
    } else {
      console.log(`La base de datos '${dbName}' ya existe`);
    }
  } catch (error) {
    console.error('Error al crear la base de datos:', error);
  } finally {
    await client.end();
  }
}

createDatabase();
