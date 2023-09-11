import "dotenv/config";

const Sequelize = require('sequelize')

const connection = new Sequelize({
    dialect: 'postgres', // qual banco vai se conecta
    host: 'localhost', //onde o banco está ?
    username: process.env.USERNAME, 
    password: process.env.PASSWORD, 
    port: process.env.PORT, // qual porta
    database: 'tarefas_database', //qual nome de dados
    define: {
      timestamps: true,  
      underscored: true,
      underscoredAll: true,
    },
  })

  module.exports= connection;