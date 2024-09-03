const express = require("express");
const mainRouter = require("./router/index")
const cors = require('cors')
const jwt = require("jsonwebtoken")

const app = express()

app.use(cors())
app.use(express.json())

app.use('./api/vi', mainRouter)


app.listen(3000)
