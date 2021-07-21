const Sequelize = require('sequelize');
const sequelize = require('./db');
const db = require('./db');
//const bcrypt = require('bcrypt');

const Usuario = db.define('usuarios',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    senha:{
        type: Sequelize.STRING,
        allowNull: false,
    }
});

//Criar a tabela 
Usuario.sync();


module.exports = Usuario;