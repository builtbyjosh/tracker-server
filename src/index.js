const express = require('express')
const mongoose = require('mongoose')
const authRoutes = require('./routes/authRoutes' ) 

const app = express()

app.use(authRoutes) 

const mongoUri = 'mongodb+srv://admin:passwordpassword@cluster0.20zms.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(mongoUri)

mongoose.connection.on('connected', ()=>{
  console.log('connected to mongo')
})

mongoose.connection.on('error', (err)=> {
  console.log('error', err)
})

app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(3000, () => {
  console.log('listening on port 3000')
})