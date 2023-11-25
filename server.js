const express = require('express')
const { Sequelize } = require('sequelize')
const app = express()


const dotenv = require('dotenv').config()
const port = process.env.PORT || 3001

app.use(express.static('public'))

const sequelize = new Sequelize({
    dialect:'mysql',
    ...require('./database/config.js')

})

const circuitsModel = require('./database/models/circuits')
const constructorModel = require('./database/models/constructor')
app.listen(port, () => console.log(`O servidor está rodando na porta ${port}`))

async function testConnection(){
    try{
        await sequelize.authenticate()
        console.log('Conexão estabelecida!')
    }
    catch (error) {
        console.error('Não foi possível conectar ao banco de dados', error)
    }
}

testConnection()