// importação do express
const express = require("express");
const app = express();
app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static("public"));

const session = require ("express-session");
app.use(session({
    secret: "ifpe2021"
}));

const auth = require ("./middlewares/servidoresAuth");
const alunoRoutes = require("./routes/alunoRoutes");
const servidorRoutes = require("./routes/servidorRoutes");


const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://dbUser:satnos2018@cluster0.e1aiz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

app.use(alunoRoutes);
app.use(servidorRoutes);

app.get("/", auth, (req, res) => {
  const status = req.query.s;

  let mensagem = "";
  if (status == "1"){
    mensagem = "Cadastro efetuado com sucesso!";
  } 

  res.render("index", { msg: mensagem, title:"Pagina Inicial"});

});

  app.get("/informacoes", (req, res) => {
    res.render("informacoes", {title : "Informações"});
  });

app.use((req, res) => {
  res.status(404).render("404", {title: "404"});
});

app.listen(1111, function(){
    console.log("Servido Reiniciado!");
}); //localhost