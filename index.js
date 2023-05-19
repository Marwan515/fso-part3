const express = require("express")
const { json } = require("express/lib/response")
const morgan = require("morgan")
const cors = require("cors")

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

morgan.token('body', (req, res) => {return JSON.stringify(req.body)})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))
app.use(cors())
app.get('/api/persons', (request, response) => {
  response.json(phoneBook)
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const contact = phoneBook.find(c => c.id === id)
  if (contact) {
    response.json(contact)
  } else {
    response.status(404).end()
  }
  
})

app.get('/info', (request, response) => {
  response.send(`Phonebook has info for ${phoneBook.length} people <br/> <br/> ${Date()}`)
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  phoneBook = phoneBook.filter(c => c.id !== id)

  response.status(204).end()
})

const generateId = () => {
  const newId = Math.floor(Math.random() * 10000000) + Math.max(...phoneBook.map(i => i.id))
  return newId
}

app.post('/api/persons', express.json(),(request, response) => {
  const body = request.body
  if (body.name && body.phoneNumber) {
    if (phoneBook.find(n => n.name == body.name)) {
      return response.status(409).json({error: "Name must be unique"})
    }
    const contact = {
      id: generateId(),
      name: body.name,
      number: Number(body.phoneNumber)
    }
    phoneBook = phoneBook.concat(contact)
    response.json(contact)
  } else {
    return response.status(400).json({
      error:  'Persons name or number is missing'
    })
  }
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`server running on ${PORT}`)
})