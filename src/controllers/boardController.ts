import { Namespace } from 'socket.io'
import { SOCKET_EVENTS_ENUM } from '../types/sockets.events'

const boardController = (namespace: Namespace) => {
  namespace.on('connection', socket => {
    const token = socket?.handshake?.headers?.token || ''
    socket.on(SOCKET_EVENTS_ENUM.BOARD_CREATE_LIST, data => {
      namespace.emit(SOCKET_EVENTS_ENUM.BOARD_CREATE_LIST_SUCCESS, {
        list: [1, 2, 3],
        data,
        token,
      })
    })
  })
}

export default boardController
