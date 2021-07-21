const Sequelize = require('sequelize');

/* Credenciais do Banco de dados local */
/*const sequelize = new Sequelize('orcamento', 'root', '245186', {
    host: 'localhost',
    dialect: 'mysql'
});*/

/*Credenciais do Banco de dados no servidor */
const sequelize = new Sequelize('orcamento', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

/*sequelize.authenticate()
.then(function(){
  console.log("Conexão com banco de dados realizada com sucesso!");
}).catch(function(err){
    console.log("Erro:Conexão com banco de dados não realizada com sucesso!");
});*/

module.exports = sequelize;