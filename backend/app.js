const sequelize = require('./config/db');
const cors = require("cors")
const Post = require('./models/post');
const express = require('express');
const postRoutes = require('./routes/postRoutes');
const bodyParser = require('body-parser');

sequelize.sync({ force: false }) // Cambia a true solo si necesitas sobrescribir tablas
  .then(() => console.log('Tablas sincronizadas'))
  .catch((err) => console.error('Error al sincronizar las tablas:', err));



const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'DELETE'], 
  allowedHeaders: ['Content-Type', 'Authorization']
}))
app.use(bodyParser.json());
app.use('/api/posts', postRoutes);


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
console.log(`Servidor corriendo en http://localhost:${PORT}`);
});