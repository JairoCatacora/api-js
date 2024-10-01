// index.js

const express = require('express');
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 9000; // Cambia 9000 a otro puerto, como 9001
const path = require ("path")
require("dotenv").config();

const deudasRoutes = require("./routes/deudas");
const recordPagosRoutes = require("./routes/recordpagos");

//swager
const swagerUI=require("swagger-ui-express");
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerSpec = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Node mongo Db api",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://44.202.236.184:8000", // Cambia "localhost" a tu IP pública de AWS
      },
    ],
  },
  apis: [`${path.join(__dirname, "./routes/*.js")}`],
};


// Middleware para analizar JSON en las solicitudes
app.use(express.json());

// Usar las rutas de Deudas y RecordPagos con el prefijo `/api`
app.use('/api', deudasRoutes);
app.use('/api', recordPagosRoutes);
app.use("/api-doc",swagerUI.serve,swagerUI.setup(swaggerJSDoc(swaggerSpec)))

// Ruta principal
app.get('/', (req, res) => {
  res.send("Bienvenido a mi API");
});

// Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("Conectado a MongoDB Atlas"))
  .catch((error) => console.error('Error al conectar a MongoDB:', error));

// Iniciar el servidor
app.listen(port, () => console.log(`Servidor escuchando en el puerto ${port}`));
