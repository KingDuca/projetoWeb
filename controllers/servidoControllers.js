const Servido = require("../models/Servido");
const bcrypt = require("bcryptjs");



module.exports = class servidoController{



    static async loginServidorGet(req, res) {
        const status = req.query.s;
        let msg = "";

        if (req.session.servidoLogin){
            res.redirect("/");
        }
        else {

            if (status == "1"){
                msg = "Login e/ou senha inválido(s)";
            }
    
            res.render("servidos/login", {title: "Login Servidor", msg})
        }
        
        

    }

    static cadastrarservidoGet (req, res){
        const status = req.query.s;
        let msg = "";

        if (status == "1"){
            msg = "Login já existe";
        }

        res.render("servidos/cadastro", {title: "Cadastra Servidor", msg});
    }

    static async cadastrarservidoPost (req, res){
        const servido = req.body;

        const resultado = await Servido.findOne ({ login: servido.login });

        if(resultado){
            res.redirect("/servidos/cadastro?s=1");    
        }
        else {
            const hash = bcrypt.hashSync(servido.senha);

            const novoServidor = new Servido({
                nome: servido.nome,
                login: servido.login,
                senha: hash
             });
            await novoServidor.save();
            
            res.redirect("/servidos/login");

        }

     
    }

    static async loginServidorPost(req, res){
        const servido = req.body;

        const resultado = await Servido.findOne ({ login: servido.login });


        if (resultado){
            if(bcrypt.compareSync(servido.senha, resultado.senha)){
                req.session.servidoLogin = servido.login;
                res.redirect ("/");
            }
        }
        res.redirect("/servidos/login?s=1");

    }

    static async logout(req, res) {
     
        req.session.servidorLogin = undefined;
        res.redirect("/servidos/login");
    }




 
}  


