import express from 'express'
import { Server } from 'socket.io'
import { BOARD } from './types/sockets.namespace'

// controller
import boardController from './controllers/boardController'

const app = express()
const expressServer = app.listen(8081, () => {
  console.log('express server 啟動')
})
const io = new Server(expressServer, {
  cors: {
    origin: '*',
  },
})
boardController(io.of(BOARD))
