const Sequelize = require('sequelize')

const connection = new Sequelize({
    dialect: 'postgres', // qual banco vai se conecta
    host: 'localhost', //onde o banco está ?
    username: 'laercio', //qual usuario
    password: 'pc@7219', // qual senha 
    port:'5432', // qual porta
    database: 'tarefas_database', //qual nome de dados
    define: {
      timestamps: true,  
      underscored: true,
      underscoredAll: true,
    },
  })

  module.exports= connection;