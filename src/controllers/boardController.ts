import { Namespace } from 'socket.io'
import socketInterface from '../types/sockets'
import { SOCKET_EVENTS_ENUM } from '../types/sockets.events'
import { GET_BOARD_BY_BOARD_ID, POST_BOARD_LIST_BY_BOARD_ID, POST_LIST_CARD_BY_LIST_ID } from '../api/axios-service'
import * as apiService from '../api/axios-service/index'
import { AxiosError } from 'axios'
import handlerError from './errorHandler'

type ErrorType = AxiosError | Error

const boardController = (namespace: Namespace) => {
  /* 建立 namespace 監聽 */
  namespace.on('connection', socket => {
    // 建立連線成功後，取得 client 帶來的 token
    const token = socket?.handshake?.headers?.token as string
    // 新用戶加入看板監聽
    socket.on(SOCKET_EVENTS_ENUM.BOARD_JOIN, (data: socketInterface.IBoardRoomPayload) => {
      const { boardId } = data
      socket.join(boardId)
    })

    // 新用戶離開看板監聽
    socket.on(SOCKET_EVENTS_ENUM.BOARD_LEAVE, (data: socketInterface.IBoardRoomPayload) => {
      const { boardId } = data
      socket.leave(boardId)
    })

    // 監聽建立看板
    socket.on(SOCKET_EVENTS_ENUM.BOARD_CREATE_LIST, async (data: socketInterface.IBoardCreatePayload) => {
      try {
        const { title, boardId } = data
        await POST_BOARD_LIST_BY_BOARD_ID({
          title,
          boardId,
          token,
        })
        const result = await GET_BOARD_BY_BOARD_ID({
          boardId,
          token,
        })
        namespace.to(boardId).emit(SOCKET_EVENTS_ENUM.BOARD_CREATE_LIST_RESULT, {
          result,
        })
      } catch (e) {
        handlerError(e as ErrorType, socket, SOCKET_EVENTS_ENUM.BOARD_CREATE_LIST_RESULT)
      }
    })

    socket.on(SOCKET_EVENTS_ENUM.BOARD_CARD_CREATE, async (data: socketInterface.ICreateCardPayload) => {
      try {
        const { title, boardId, listId } = data
        await POST_LIST_CARD_BY_LIST_ID({
          title,
          listId,
          token,
        })
        const result = await GET_BOARD_BY_BOARD_ID({
          boardId,
          token,
        })
        namespace.to(boardId).emit(SOCKET_EVENTS_ENUM.BOARD_CARD_CREATE_RESULT, {
          result,
        })
      } catch (e) {
        handlerError(e as ErrorType, socket, SOCKET_EVENTS_ENUM.BOARD_CARD_CREATE_RESULT)
      }
    })

    socket.on(SOCKET_EVENTS_ENUM.BOARD_MODIFY_TITLE, async (data: socketInterface.IModifyBoardTitlePayload) => {
      try {
        const { title, boardId } = data
        await apiService.PATCH_BOARD_TITLE_BY_BOARD_ID({
          title,
          boardId,
          token,
        })
        namespace.to(boardId).emit(SOCKET_EVENTS_ENUM.BOARD_MODIFY_TITLE_RESULT, {
          code: 0,
          title,
        })
      } catch (e) {
        handlerError(e as ErrorType, socket, SOCKET_EVENTS_ENUM.BOARD_MODIFY_TITLE_RESULT)
      }
    })

    // 離線監聽
    socket.on('disconnect', () => {
      socket?.disconnect(true)
    })
  })
}

export default boardController
