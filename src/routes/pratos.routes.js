const { Router } = require("express");

const PratosController = require("../controllers/PratosController");

const pratosRoutes = Router();

const PratosController = new PratosController();

pratosRoutes.post("/:user_id.adminBro",  notesController.create);



module.exports = notesRoutes; 