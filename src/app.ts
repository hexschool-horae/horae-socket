import express from 'express'
import { Server } from 'socket.io'

const app = express()
const expressServer = app.listen(8081, () => {
  console.log('express server 啟動')
})
const io = new Server(expressServer, {
  cors: {
    origin: 'http://localhost:3000',
  },
})

io.on('connection', socket => {
  console.log(socket)
  socket.emit('dataFrom', {
    test: 'hello',
  })
})
