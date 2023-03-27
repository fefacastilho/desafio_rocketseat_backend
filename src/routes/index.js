const { Router } = require("express");

const usersRouter = require("./users.routes");
const pratosRouter = require("./pratos.routes");
const sessionRouter = require("./session.routes");



const routes = Router();

routes.use("/users", usersRouter);
routes.use("/pratos", pratosRouter);
routes.use("/session", sessionRouter);



module.exports = routes; 