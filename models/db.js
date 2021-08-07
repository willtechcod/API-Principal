const Sequelize = require('sequelize');

/* Credenciais do Banco de dados local */
const sequelize = new Sequelize('willtech_orcamento', 'willtech_willtechcod', 'skt245186', {
    host: '189.45.192.50',
    dialect: 'mysql'
});

/*Credenciais do Banco de dados no servidor */


sequelize.authenticate()
.then(function(){
  console.log("Conexão com banco de dados realizada com sucesso!");
}).catch(function(err){
    console.log("Erro:Conexão com banco de dados não realizada com sucesso!");
});

module.exports = sequelize;