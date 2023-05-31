const express = require('express')
const app = express()

const db = require('./database')
const port = 3030
const Games = require('./routes/Games');
app.use('/games', Games);
app.use(express.json());





app.listen(port, () => console.log(`Example app listening on port ${port}!`))
