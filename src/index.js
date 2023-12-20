require("dotenv").config()
const express = require('express');
const cors = require('cors');
const knex = require('./conexao')

const app = express()

app.use(express.json())
app.use(cors())
app.get('/', async (req, res) => {
    try {
        const nomes = await knex('nomes')
        res.status(202).json(nomes)

    } catch (error) {
        console.log(error)
        res.status(500).json("erro no servidor")
    }
})

const PORT = process.env.PORT || 3000

app.listen(PORT)


