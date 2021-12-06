const express = require('express')
const app = express()
const http = require('http').createServer(app)
const cors = require('cors')
const ScoreControllers = require('./controllers/scoreController')

const io = require('socket.io')(http, {
  cors: {
    origin: '*',
    methods: ['POST', 'GET']
  }
})

const PORT = 3002

app.use(express.json())
app.use(cors())

app.get('/:playerName', ScoreControllers.getAll)

require('./sockets')(io)

http.listen(PORT, () => console.log(`Ouvindo a porta ${ PORT }`))
