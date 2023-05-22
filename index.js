const Phonebook = require('./models/phonebookdb')
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

morgan.token('body', (req) => {return JSON.stringify(req.body)})

const unkownkEndpoint = (request, response) => {
  response.status(404).send({error: "Unkown endpoint"})
}

const errorHandler = (error, request, response, next) => {
  if (error.name === "CastError") {
    return response.status(400).send({error: "Malformatted id"})
  } else if (error) {
    return response.status(400).send({error: error.message})
  }
  next(error)
}

app.use(express.static('build'))
app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))
app.use(cors())

let phoneCount = 0

async function phoneBookCount() {
  const phoneCounttt = await Phonebook.estimatedDocumentCount()
  phoneCount = phoneCounttt
  return
}

phoneBookCount()

app.get('/api/persons', (request, response, next) => {
  Phonebook.find({})
  .then(results => {
    response.json(results)
  })
  .catch(error => next(error))
})

app.get('/api/persons/info', (request, response) => {
  response.send(`Phonebook has info for ${phoneCount} people`)
})

app.get('/api/persons/:id', (request, response, next) => {
  const id = request.params.id
  Phonebook.findById(id)
    .then(con => {
      if (con) {
        response.json(con.toJSON())
      } else {
        response.status(404).end()
      }
    })
    .catch(error => next(error))
})

app.delete('/api/persons/:id', (request, response, next) => {
  const id = request.params.id
  Phonebook.findByIdAndRemove(id)
    .then(() => {
      response.status(204).end()
    })
    .catch(error => next(error))
})

app.post('/api/persons', (request, response, next) => {
  const body = request.body
  console.log(body)
  if (body.name && body.phoneNumber) {   
    const contact = new Phonebook ({
      name: body.name,
      number: body.phoneNumber
    })
    contact.save()
      .then(sc => {
        response.json(sc)
      })
      .catch(error => next(error))
  }
})

app.put('/api/persons/:id', (request, response, next) => {
  const body = request.body

  if (body.name && body.phoneNumber) {
    
    const contact = {
      name: body.name,
      number: body.phoneNumber
    }

    Phonebook.findByIdAndUpdate(request.params.id, contact, { new: true, runValidators: true})
      .then(uc => {
        response.json(uc)
      })
      .catch(error => next(error))
  } else {
    return response.status(400).json({
      error:  'Persons name or number is missing'
    })
  }

})

app.use(unkownkEndpoint)
app.use(errorHandler)

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`server running on ${PORT}`)
})