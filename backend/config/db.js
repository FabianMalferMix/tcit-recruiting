const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.PGDATABASE, // Nombre de la base de datos
  process.env.PGUSER,     // Usuario
  process.env.PGPASSWORD, // Contraseña
  {
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    dialect: 'postgres',
    logging: false, // Opcional: desactiva logs SQL en consola
  }
);

module.exports = sequelize;
