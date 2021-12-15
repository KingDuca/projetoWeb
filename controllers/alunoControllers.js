const Aluno = require("../models/Aluno");



module.exports = class AlunoController{

 static async listarAluno (req, res){
    const alunos = await Aluno.find();
    res.render("aluno/lista", {alunos, title: "Alunos"}); 
        }

static async recuperarAluno (req, res){
    if (req.session.servidoLogin){
        const alunos = await Aluno.find();
        res.render("aluno/relatorio", {alunos, title: "Relatorio de Aluno"});   
    }
    
    else {
        res.render("servidos/login", {title: "Login", msg})
    }


    
    }

    static async cadastrarAlunoGet(req,res){
        const id = req.params.id;
        if (id){
            const aluno = await Aluno.findById(id);
            console.log(aluno);
            res.render("aluno/cadastro", {title: "Atualizar Aluno", aluno});
        }

        else{
        res.render("aluno/cadastro", {title: "Cadastrar Aluno", aluno: {}});
        }
    }

    static async cadastrarAlunoPost(req,res){
        const aluno = req.body;
        if(aluno.id){ //atualizar
           await Aluno.findOneAndUpdate ({ _id: aluno.id}, {
                nome: aluno.nome,
                endereco: aluno.endereco,
                email: aluno.email,
                telefone: aluno.telefone,
                matricula: aluno.matricula
           });

        } else{ //inserir
            const novoAluno = new Aluno ({
            nome: aluno.nome,
            endereco: aluno.endereco,
            email: aluno.email,
            telefone: aluno.telefone,
            matricula: aluno.matricula,
                                            });
            await novoAluno.save();
        }


        res.redirect ("/alunos"); 
    }


    static async removerAluno(req,res){
            const id = req.params.id;
            await Aluno.findOneAndDelete({_id: id});
            res.redirect("/alunos");
        };
}  


