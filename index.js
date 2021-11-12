const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/myapp')
const cors = require('cors')
const { connect } = require('http2')
const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
app.use('/', require('./routes/index.route'))
app.use('/', require('./routes/vocab.route'))

const port = 3000 | process.env.PORT 

app.listen(port)
