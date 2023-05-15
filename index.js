const express = require("express")
const { json } = require("express/lib/response")

let phoneBook = [
  { 
    "id": 1,
    "name": "Arto Hellas", 
    "number": "040-123456"
  },
  { 
    "id": 2,
    "name": "Ada Lovelace", 
    "number": "39-44-5323523"
  },
  { 
    "id": 3,
    "name": "Dan Abramov", 
    "number": "12-43-234345"
  },
  { 
    "id": 4,
    "name": "Mary Poppendieck", 
    "number": "39-23-6423122"
  }
]

const app = express()

app.get('/api/persons', (request, response) => {
  response.json(phoneBook)
})

app.get('/info', (request, response) => {
  response.send(`Phonebook has info for ${phoneBook.length} people <br/> <br/> ${Date()}`)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`server running on ${PORT}`)
})