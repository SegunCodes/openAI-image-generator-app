const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')
const port = process.env.PORT || 3000

const app = express();
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use('/openai', require('./routes/openaiRoutes'))

app.listen(port, () => console.log(`Server started on port ${port}`))
