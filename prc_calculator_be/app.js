const express = require("express");
const cors = require('cors');

const app = express()
app.use(cors())
app.use(express.json())

// Controllers

const userController = require('./controllers/userController')
const historyController = require('./controllers/historyController')

// Routes

app.use('/users', userController);
app.use('/history', historyController)


// Baselines

app.get("/", async (req,res) => {
    res.send("Base response Prc_Calculator. Hit an endpoint.")
})

app.get("*", async(req, res)=> {
    res.status(404).json({
        message:"Route non-existant or inactive",
        data: null
    })
})

module.exports = app