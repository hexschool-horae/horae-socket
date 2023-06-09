import { AxiosError } from 'axios'
import { Socket } from 'socket.io'
const handlerError = (error: AxiosError | Error, socket: Socket, errorEvent: string) => {
  if (error instanceof AxiosError) {
    socket.emit(errorEvent, {
      code: -1,
      data: error.response?.data,
    })
  } else {
    socket.emit(errorEvent, {
      code: -1,
      error,
    })
  }
}

export default handlerError
