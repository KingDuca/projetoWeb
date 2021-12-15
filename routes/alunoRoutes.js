const express = require("express");
const routes = express.Router();
const AlunoController = require("../controllers/alunoControllers");
const auth = require ("../middlewares/servidoresAuth")


routes.get ("/alunos/", auth, AlunoController.listarAluno);
routes.get ("/alunos/relatorio", auth, AlunoController.recuperarAluno);
routes.get("/aluno/cadastro/:id?", auth, AlunoController.cadastrarAlunoGet);  
routes.post("/aluno/cadastro", auth, AlunoController.cadastrarAlunoPost);
routes.get("/aluno/remover/:id", auth, AlunoController.removerAluno);
 
module.exports =  routes;