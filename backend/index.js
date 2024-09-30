const express = require("express");
const mainRouter = require("./router/index")
const cors = require('cors')
const dotenv = require("dotenv");
const { connectDB } = require("./db");


const app = express()

dotenv.config()

app.use(cors())
app.use(express.json())

app.use('/api/vi', mainRouter)

const PORT = process.env.PORT || 3000;  // Use port from .env or default to 3000
app.listen(PORT, async () => {
    await connectDB();  
    console.log(`Server running on port ${PORT}`);
});