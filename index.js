const express = require('express');
const connection = require('./src/database');

const app = express()

app.use(express.json()) //obrigatório

const tarefas = []

connection.authenticate()
console.log('Connection has been established successfully.');

app.get('/', (request, response) => {
    console.log("Entrei aqui")
    response.json({ messagem: "Bem vindo" })
})

// Cadastrar um nova tarefa
app.post('/tarefas', (request, response) => {
    const tarefa = {
        nome: request.body.nome,
        descricao: request.body.descricao
    }

    tarefas.push(request.body.tarefas)

    response.status(201).json(tarefa) // recomendada
    // response.json(tarefa, 201) antiga 
})

app.get('/tarefas', (request, response) => {
    response.json(tarefas)
})



app.listen(3333, () => console.log("Aplicação online"))

