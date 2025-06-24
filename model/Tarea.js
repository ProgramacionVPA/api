
// El modelo Tarea define la estructura de los documentos en la colección "tareas" de MongoDB.
// - nombre: campo obligatorio de tipo String.
// - descripcion: campo opcional de tipo String.
// - complete: campo booleano que indica si la tarea está completada, con un valor por defecto de false.
// Este modelo se utiliza para interactuar con la base de datos MongoDB, permitiendo crear, leer, actualizar y eliminar tareas.
let mongoose = require('mongoose');

const tareaSchema = new mongoose.Schema({
    nombre: {type: String, required: true},
    descripcion: {type: String, required: false},
    completed: {type: Boolean, default: false},
});

module.exports = mongoose.model('Tarea', tareaSchema);

