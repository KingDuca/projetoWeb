const express = require("express");
const routes = express.Router();
const ServidoController = require("../controllers/servidoControllers");

routes.get("/servidos/login", ServidoController.loginServidorGet);
routes.post("/servidos/login", ServidoController.loginServidorPost);
routes.get("/servidos/cadastro", ServidoController.cadastrarservidoGet);
routes.post("/servidos/cadastro", ServidoController.cadastrarservidoPost);
routes.get("/usuarios/logout", ServidoController.logout)


 
module.exports =  routes;