const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const servidoSchema = Schema({
        nome: String,
        login:String,
        senha: String,
        dataCadastro: {
            type: Date,
            default: Date.now()
        }
});


module.exports = mongoose.model("Servidores", servidoSchema);

