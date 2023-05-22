const mongoose = require('mongoose')
// eslint-disable-next-line no-undef
const url = process.env.MONGODB_URI

mongoose.set('strictQuery', false)
mongoose.connect(url)
  .then(() => {
    console.log('Connected To MongoDB ', url)
  })
  .catch((error) => {
    console.log('error connecting to MongoDB => ', error.message)
  })

const phoneBookSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: [3, 'Minimum name length should be atleast 3'],
    required: [true, "Name is Required"]
  },
  number: {
    type: String,
    minLength: [8, 'Minimum number length should be atleast 8'],
    validate: { validator: (v) => {
      return /^\d{2,3}(-\d+)+$/.test(v)
    },
    message: props => `${props.value} is not Valid, example: 012-928371`
   },
    required: [true, "User Number is required"]
  }
})

phoneBookSchema.set('toJSON', {
  transform: (document, returnObj) => {
    returnObj.id = returnObj._id.toString()
    delete returnObj._id
    delete returnObj.__v
  }
})


module.exports = mongoose.model('Phonebook', phoneBookSchema)