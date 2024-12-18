const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('dotenv').config()
const connectionDB = require('./config/db')
const router = require('./routes')

const app = express()
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}))

app.use(express.json())
app.use(cookieParser())

app.use("/api", router)

const PORT = 5050 || process.env.PORT


connectionDB().then(() => {
    app.listen(PORT, () => {
        console.log("connnect to DB")
        console.log("Server is running on Port " + PORT)
    })
})