const express = require('express')
const bc = require('./controllers/books_controllers')

const app = express()

app.use(express.json()) // top level middleware
const port = 4000

app.get('/api/books', bc.read)
app.post('/api/books', bc.create)
app.put('/api/books/:id', bc.update)

app.listen(port, () => console.log(`Server is running wild on port: ${port}`))