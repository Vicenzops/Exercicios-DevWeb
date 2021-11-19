
var express = require('express');
var mongoose = require('mongoose');

var app = express();

app.use(express.static('./public'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", "./views");




app.get(["/", "/home"] ,(req,resp) =>
    resp.render("home"));
app.get("/cadastrar", (req,resp)=>
    resp.render("cadastrar"));
app.get("/buscar", (req,resp)=>
    resp.render("buscar"));
app.get("/deletar", (req,resp)=>
    resp.render("deletar"));
app.get("/atualizar", (req,resp)=>
    resp.render("atualizar"));



//Criar
app.post("/cadastrado", (req,resp) =>{
    var id_add = req.body.id;
    var nome_add = req.body.nome;
    var marca_add = req.body.marca;
    var quantidade_add = req.body.quantidade;

    var novo = new prodModelo({
        dbId: id_add ,
        dbNome: nome_add ,
        dbMarca: marca_add,
        dbQtd : quantidade_add});
    novo.save((err, obj)=>{
        if(err){
            console.log('Erro ao Cadastrar!')
        }
    });

    resp.write('<h1>Produto cadastrado com sucesso!</h1><br><a href="/">Voltar</a>');
    resp.end();
});

//Buscar
app.post("/buscado", function(req,resp){
    var nome = req.body.nome;
    prodModelo.find({dbNome: nome}, function(err, obj) {
    resp.render('buscando', {obj})
})
})


//Atualizar
app.post("/atualizado", (req, resp) =>{
    var id = req.body.id;
    var nome = req.body.nome;
    var marca = req.body.marca;
    var quantidade = req.body.quantidade;

    prodModelo.updateOne( {dbId: id}, {dbNome: nome, dbMarca: marca, dbQtd: quantidade},
        (err, obj)=>{
        resp.write('<h1>Produto atualizado com sucesso!</h1><br><a href="/">Voltar</a>')
        resp.end()
    })
    
})


//Apagar
app.post("/deletado", function(req, resp){
    var id = req.body.id;

    prodModelo.deleteOne( {dbId: id}, (err, obj) => {
        resp.write('<h1>Produto Deletado com Sucesso!</h1><br><a href="/">Voltar</a>')
        resp.end()
    });
    
});

//Checagem de Estoque
app.get("/estoque", (req, resp)=> {

    prodModelo.find({}, function(err, obj) {
        resp.render('estoque', {obj}) });
});

let prodSchema = new mongoose.Schema({
    dbId : Number ,
    dbNome : String ,
    dbMarca : String ,
    dbQtd: Number});

let prodModelo = mongoose.model('Usuario', prodSchema);

app.listen(80);
mongoose.connect("mongodb://localhost/home");
console.log("Online");