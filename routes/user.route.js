const express = require("express")

const routes = express.Router()

routes.get('/player', (req, res)=> {
    res.send("Welcome Player!")
})

module.exports = routes