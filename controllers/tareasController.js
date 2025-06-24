const Tarea = require('../model/Tarea');



exports.getTareas = async (req, res) => {
    const tareas = await Tarea.find();
    console.log(`El numero de tareas es ${tareas.length}`);
    res.json(tareas);
}



exports.addTarea = async (req, res) => {
    let {nombre, descripcion, completed} = req.body;
    let nuevo =   new Tarea({nombre, descripcion, completed});
    await nuevo.save();
    console.log('tarea agragada')
    res.status(201).json(nuevo);
}

exports.eliminarTarea = async (req, res) => {
    await Tarea.findByIdAndDelete(req.params.id);
    res.json({message: "Tarea eliminada correctamente"});
}



exports.editarTarea = (req, res) => {
    let id = Number(req.params.id); // El id viaja en la URL
    let { nombre, completed } = req.body;

    let tarea = tareas.find(t => t.id === id);
    if (!tarea) {
        return res.status(404).json({ error: "Tarea no encontrada" });
    }

    if (nombre !== undefined) tarea.nombre = nombre;
    if (completed !== undefined) tarea.completed = completed;

    res.json({ message: "Tarea actualizada correctamente", tarea });
}


    