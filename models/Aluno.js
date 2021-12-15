const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const alunoSchema = Schema({
        nome: String,
        endereco: String,
        email: String,
        telefone: Number,
        matricula: String,
        dataCadastro: {
            type: Date,
            default: Date.now()
        }
});


module.exports = mongoose.model("Aluno", alunoSchema);

