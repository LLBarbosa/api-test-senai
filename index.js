const express = require('express')

const app = express()

app.use(express.json())

app.get('/', (request, response) => {
    console.log("Entrei aqui")
    response.json({messagem: "Bem vindo"})
})

app.post('/tarefas', (request, response) => {
    console.log(request.body)
    response.json({messagem: 'tudo bem'})
})

app.listen(3333, () => console.log("Aplicação online"))

