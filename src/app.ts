import express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'

const app = express()
const server = createServer(app)
const io = new Server(server)

app.get('/', (req, res) => {
  return res.send('hello world')
})

io.on('connection', () => {
  console.log('connect')
})

server.listen(3000, () => {
  console.log('API is linstening on port 3000')
})
