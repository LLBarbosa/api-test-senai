const express = require('express');
const connection = require('./src/database');
const Task = require('./src/models/task')

const app = express()

app.use(express.json()) //obrigatório

const tarefas = []

connection.authenticate()
connection.sync()
console.log('Connection has been established successfully.');

app.get('/', (request, response) => {
    console.log("Entrei aqui")
    response.json({ messagem: "Bem vindo" })
})

// Cadastrar um nova tarefa
app.post('/tarefas', async (request, response) => {
    const tarefa = {
        name: request.body.name,
        description: request.body.description
    }

    const newTask = await Task.create(tarefa)

    response.status(201).json(newTask) // recomendada
    // response.json(tarefa, 201) antiga 
})

app.get('/tarefas', (request, response) => {
    response.json(tarefas)
})



app.listen(3333, () => console.log("Aplicação online"))

