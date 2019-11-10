const express = require('express')
const cors = require('cors')
const connectDB = require('./config/database')
const router = require('./config/routes')
connectDB()
const app = express()
app.use(express.json())
const port = 3020
app.use(cors())

app.use('/',router)
app.listen(port, () => {
    console.log('listening on port', port)
})

