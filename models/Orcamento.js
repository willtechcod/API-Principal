const Sequelize = require('sequelize');
const sequelize = require('./db');
const db = require('./db');

const Orcamento = db.define('orcamentos',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    phone:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    whatsApp:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    projeto:{
        type: Sequelize.TEXT,
        allowNull: false,
    }
});

//Criar a tabela 
Orcamento.sync();


module.exports = Orcamento;