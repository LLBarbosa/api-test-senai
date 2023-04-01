const express = require('express');
const connection = require('./src/database');
const Task = require('./src/models/task')

const app = express()

app.use(express.json()) //obrigatório


connection.authenticate()
connection.sync()
console.log('Connection has been established successfully.');

app.get('/', (request, response) => {
    console.log("Entrei aqui")
    response.json({ messagem: "Bem vindo" })
})

// Cadastrar um nova tarefa
app.post('/tarefas', async (request, response) => {
    try {
        const tarefa = {
            name: request.body.name,
            description: request.body.description
        }

        if (!tarefa.name || !tarefa.description) {
            return response
                .status(400)
                .json({ message: 'Nome/Descrição é obrigatório' })
        }

        const taskInDatabase = await Task.findOne(
            { where: { name: tarefa.name } }
        ) // SELEC FROM taks where name = ''

        if(taskInDatabase) {
            return response
            .status(400)
            .json({ message: 'Já existe uma tarefa com esse nome' })
        }
       
        const newTask = await Task.create(tarefa)

        response.status(201).json(newTask) // recomendada
    } catch (error) {
        console.log(error)
        response.status(500).json({ message: 'Não conseguimos processar sua solicitação.' })
    }
})

app.get('/tarefas', async (request, response) => {
    try {
        const tasks = await Task.findAll()
        response.json(tasks)
    } catch (error) {
        response.status(500).json({ message: 'Não conseguimos processar sua solicitação.' })
    }
})

app.listen(3333, () => console.log("Aplicação online"))


        // "" false
        // 0 false
        // false false
        // null false
        // undefined false


