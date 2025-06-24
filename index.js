require('dotenv').config();
let express = require('express');
let app = express();
let tareasRoutes = require('./routes/tareas');
let mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("Conexión a MongoDB Atlas"))
.catch((err) => console.error("Error al conectar a MongoDB:", err));

//console.log(process.env.MONGO_URI);// Para verificar que la variable de entorno se carga correctamente


app.use(express.json()); // Middleware para parsear JSON
app.use('/tareas', tareasRoutes);

app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
})