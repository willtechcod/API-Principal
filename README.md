SEQUENCIA PARA CRIAR O PROJETO
Criar o arquivo package
### npm init 

INSTALAR BIBLIOTECAS PARA GERENCIAR O PROJETO

Gerenciar as requisições, rotas e URLs, entre outras funcionalidades
### npm install express

criar arquivo app.js abaixo um ex
const express = require('express');
const app = express();

app.get('/', function (req, res){
    res.send('Pizzaria');
});

app.listen(8080);

Rodar o projeto
### node app.js

Acessar Projeto no navegador 
### http://localhost:8080/

Instalar o módolu para reiniciar o servido sempre que houver alteração no código fonte, -g significa globalmente
### npm install -g nodemon

Rodar o projeto usando o nodemon
### nodemon app.js

Sequelize é uma biblioteca javascript que q facilita o gerenciamento com banco dados SQL
### npm install --save sequelize

Instalar o drive do banco de dados 
### npm install --save mysql2

abrir o workbenck criar uma base de dados
### CREATE DATABASE orcamento character set utf8mb4 collate utf8mb4_unicode_ci

criar um diretório na raiz do projeto chamado models criar um arquivo db.js
### models
### db.js 

em db.js fazer a chamada para conexão com banco de dados 

const Sequelize = require('sequelize');

const sequelize = new Sequelize('orcamento', 'root', '245186', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate() vereficar se conectou com a base de dados 
.then(function(){
    console.log("Conexão com banco de dados realizada com sucesso!");
}).catch(function(err){
    console.log("Conexão com banco de dados não realizada com sucesso!");
});

module.exports = sequelize;

em models criar o artigo que vai referenciar a tabela no meu caso o Orçamento
### Orcamento.js

Permirtir acesso a API 
### npm install --save cors

### função para aguardar 

await sleep(3000);
    function sleep(ms){
       return new Promise((resolve)=> {
       setTimeout(resolve.ms);
       });
    };