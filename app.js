const express = require('express');
const cors = require('cors');
const app = express();

const Orcamento = require('./models/Orcamento');

app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization");
    app.use(cors());
    next();
});



//const db = require("./models/db");

app.post('/administrativo', function(req, res){
    const email = req.body.email;
    const senha = req.body.senha;
    console.log(email+""+senha);
});

app.get('/', async (req, res) => {
    await Orcamento.findAll({ order: [['id', 'DESC']] }).then(function (orcamentos) {
        res.json({ orcamentos });
    });
});

app.get('/visualizar/:id', async (req, res) => {
    await Orcamento.findByPk(req.params.id)
        .then(orcamentos => {
            return res.json({
                error: false,
                orcamentos
            });
        }).catch(function (erro) {
            return res.status(400).json({
                error: true,
                message: "Erro: Orçamnento não encontrado!"
            });
        });
});

app.post('/cadastar', async (req, res) => {

    
    const resultCad = await Orcamento.create(
        req.body
    ).then(function () {
        return res.json({
            error: false,
            message: "Orçamento Cadastrado com sucesso!"
        });
    }).catch(function (err) {
        return res.status(400).json({
            error: true,
            message: "Erro: Orçamento não Cadastrado com sucesso!"
        });
    });
});

app.put('/editar', async (req, res) => {
    await Orcamento.update(req.body, {
        where: { id: req.body.id }
    }).then(function () {
        return res.json({
            error: false,
            message: "Orçamento editado com sucesso!"
        });
    }).catch(function (erro) {
        return res.status(400).json({
            error: true,
            message: "Erro: Orçamento não editado com sucesso!"
        });
    });
});

app.delete('/apagar/:id', async (req, res) => {
    await Orcamento.destroy({
        where: { id: req.params.id }
    }).then(function () {
        return res.json({
            error: false,
            message: "Orçamento apagado com sucesso!"
        });
    }).catch(function (erro) {
        return res.status(400).json({
            error: true,
            message: "Erro: Orçamento não apagado com sucesso!"
        });
    });
});

//Listar usuários administradores cadastrados
app.get('/usuario', function (req, res) {
    Usuario.findAll({ order: [['id', 'DESC']] }).then(function (usuarios) {
        res.json({ usuarios });
    });
});

app.post('/cadusuario', async (req, res) => {
    const resultCad = await Usuario.create(
        req.body
    ).then(function () {
        return res.json({
            error: false,
            message: "Usuário Cadastrado com sucesso!"
        });
    }).catch(function (err) {
        return res.status(400).json({
            error: true,
            message: "Erro: Usuário não Cadastrado com sucesso!"
        });
    });
});

/* Rodar a API localmente */
/*app.listen(8080, function () {
console.log("Servidor rodando na porta 8080: http://localhost:8080");
});*/

/* Rodar a API no servidor da Umbler */
var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log("Servidor rodando na porta "+ port + ": http://willtechcod-com.umbler.net");
})

