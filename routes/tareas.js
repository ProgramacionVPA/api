let express = require("express");
let tareasController = require("../controllers/tareasController");

let router = express.Router();

router.get('/', tareasController.getTareas);

router.post('/', tareasController.addTarea);

router.delete('/:id', tareasController.eliminarTarea);

router.put('/:id', tareasController.editarTarea);

module.exports = router;
