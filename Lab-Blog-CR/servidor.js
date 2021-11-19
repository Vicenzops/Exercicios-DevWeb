var express = require('express');
var mongoose = require('mongoose');

var app = express();

app.use(express.static('./public'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/postar", function(req,resp){
    resp.render("post");
});

app.post("/postado", function(req,resp){
    var titulo_post = req.body.Titulo;
    var resumo_post = req.body.Resumo;
    var conteudo_post = req.body.Conteudo;

    var novo = new postModelo({
        dbtitulo: titulo_post ,
        dbresumo: resumo_post ,
        dbconteudo: conteudo_post});
    novo.save();

    resp.render("resposta");
    resp.end();
});

app.get(["/", "/blog"] , function(req,resp){

    postModelo.find(function(erro, listaPosts){
        resp.render("blog", {posts: listaPosts});
        resp.end()
    })
    
});

let postSchema = new mongoose.Schema({
    dbtitulo : String ,
    dbresumo : String ,
    dbconteudo : String });

let postModelo = mongoose.model('Usuario', postSchema);

app.listen(80);
mongoose.connect("mongodb://localhost/Blog");
console.log("Online");