const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')

const server = express()

const port = 4000
server.use(cors())
server.use(express.urlencoded({ extended: true }))
server.use(express.json())

server.listen(process.env.PORT || port, function () {
    console.log('Servidor Conectado')
})

module.exports = server