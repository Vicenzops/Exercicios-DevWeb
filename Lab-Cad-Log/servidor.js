var http = require('http');
var express = require('express');

var app = express();

app.use(express.static('./public'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/cadastra", function(req,resp){
    resp.render("cadastra");
});
app.get("/cadastrado", function(req,resp){
    resp.write("<h1>Cadastrado com sucesso!</h1>")
    resp.end()
});

app.get(["/", "/login"] , function(req,resp){
    resp.render("login");
});

app.post("/logado", function(req,resp){
    let login = req.body.Login;
    let senha = req.body.Senha;
    if(login === "fulano" && senha === "123456"){
        let mensagem = "Sucesso!"
        resp.render("resposta", {mensagem, login, senha})
    }
    else{
        let mensagem = "Falha!"
        resp.render("resposta", {mensagem, login, senha})
    }
    resp.end()
});


var sever = http.createServer(app);
sever.listen(8080);
console.log("Online");