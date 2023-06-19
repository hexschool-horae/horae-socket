import { Namespace } from 'socket.io'
import socketInterface from '../types/sockets'
import { SOCKET_EVENTS_ENUM } from '../types/sockets.events'
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

    // 監聽修改看板標題
    socket.on(SOCKET_EVENTS_ENUM.BOARD_MODIFY_TITLE, async (data: socketInterface.IModifyBoardTitlePayload) => {
      try {
        const { title, boardId } = data
        await apiService.PATCH_BOARD_TITLE_BY_BOARD_ID({
          title,
          boardId,
          token,
        })
        namespace.to(boardId).emit(SOCKET_EVENTS_ENUM.BOARD_MODIFY_TITLE_RESULT, {
          code: 0, // 成功
          title, //
        })
      } catch (e) {
        handlerError(e as ErrorType, socket, SOCKET_EVENTS_ENUM.BOARD_MODIFY_TITLE_RESULT)
      }
    })

    // 修改看板觀看權限
    socket.on(SOCKET_EVENTS_ENUM.BOARD_MODIFY_VIEW_SET, async (data: socketInterface.IModifyBoardViewSet) => {
      try {
        const { viewSet, boardId } = data
        await apiService.PATCH_BOARD_VIEW_SET_BY_BOARD_ID({
          viewSet,
          boardId,
          token,
        })
        const result = await apiService.GET_BOARD_BY_BOARD_ID({
          boardId,
          token,
        })
        namespace.to(boardId).emit(SOCKET_EVENTS_ENUM.BOARD_MODIFY_VIEW_SET_RESULT, {
          code: 0, // 成功
          result,
        })
      } catch (e) {
        handlerError(e as ErrorType, socket, SOCKET_EVENTS_ENUM.BOARD_MODIFY_VIEW_SET_RESULT)
      }
    })

    // 看板封存設定 開啟/關閉
    socket.on(SOCKET_EVENTS_ENUM.BOARD_ARCHIVE, async (data: socketInterface.IArchiveBoardStatus) => {
      try {
        const { status, boardId } = data
        await apiService.PATCH_BOARD_STATUS_BY_BOARD_ID({
          status,
          boardId,
          token,
        })
        const result = await apiService.GET_BOARD_BY_BOARD_ID({
          boardId,
          token,
        })
        namespace.to(boardId).emit(SOCKET_EVENTS_ENUM.BOARD_ARCHIVE_RESULT, {
          code: 0, // 成功
          result,
        })
      } catch (e) {
        handlerError(e as ErrorType, socket, SOCKET_EVENTS_ENUM.BOARD_ARCHIVE_RESULT)
      }
    })

    // 看板新增封面
    socket.on(SOCKET_EVENTS_ENUM.BOARD_UPDATE_COVER, async (data: socketInterface.IBoardUpdateCover) => {
      try {
        const { fileURL, boardId } = data
        await apiService.PATCH_BOARD_COVER_BY_BOARD_ID({
          fileURL,
          boardId,
          token,
        })
        const result = await apiService.GET_BOARD_BY_BOARD_ID({
          boardId,
          token,
        })
        namespace.to(boardId).emit(SOCKET_EVENTS_ENUM.BOARD_UPDATE_COVER_RESULT, {
          code: 0, // 成功
          result,
        })
      } catch (e) {
        handlerError(e as ErrorType, socket, SOCKET_EVENTS_ENUM.BOARD_UPDATE_COVER_RESULT)
      }
    })

    // 看板刪除封面
    socket.on(SOCKET_EVENTS_ENUM.BOARD_DELETE_COVER, async (data: socketInterface.IBoardDeleteCover) => {
      try {
        const { boardId } = data
        await apiService.DELETE_BOARD_COVER_BY_BOARD_ID({
          boardId,
          token,
        })
        const result = await apiService.GET_BOARD_BY_BOARD_ID({
          boardId,
          token,
        })
        namespace.to(boardId).emit(SOCKET_EVENTS_ENUM.BOARD_DELETE_COVER_RESULT, {
          code: 0, // 成功
          result,
        })
      } catch (e) {
        handlerError(e as ErrorType, socket, SOCKET_EVENTS_ENUM.BOARD_DELETE_COVER_RESULT)
      }
    })

    // 看板設定成員權限
    socket.on(
      SOCKET_EVENTS_ENUM.BOARD_MODIFY_MEMBER_PERMISSION,
      async (data: socketInterface.IModifyBoardMemberPermission) => {
        try {
          const { role, userId, boardId } = data
          await apiService.PATCH_BOARD_MEMBERS_BY_BOARD_ID({
            role,
            userId,
            boardId,
            token,
          })
          const result = await apiService.GET_BOARDS_ALL_MEMBERS_BY_ID({
            boardId,
            token,
          })
          namespace.to(boardId).emit(SOCKET_EVENTS_ENUM.BOARD_MODIFY_MEMBER_PERMISSION_RESULT, {
            code: 0, // 成功
            result,
          })
        } catch (e) {
          handlerError(e as ErrorType, socket, SOCKET_EVENTS_ENUM.BOARD_MODIFY_MEMBER_PERMISSION_RESULT)
        }
      }
    )

    // 看板刪除成員
    socket.on(SOCKET_EVENTS_ENUM.BOARD_DELETE_MEMBER, async (data: socketInterface.IDeleteBoardMember) => {
      try {
        const { userId, boardId } = data
        await apiService.DELETE_BOARD_MEMBERS_BY_BOARD_ID({
          userId,
          boardId,
          token,
        })
        const result = await apiService.GET_BOARDS_ALL_MEMBERS_BY_ID({
          boardId,
          token,
        })
        namespace.to(boardId).emit(SOCKET_EVENTS_ENUM.BOARD_DELETE_MEMBER_RESULT, {
          code: 0, // 成功
          result,
        })
      } catch (e) {
        handlerError(e as ErrorType, socket, SOCKET_EVENTS_ENUM.BOARD_DELETE_MEMBER_RESULT)
      }
    })

    // 看板新增成員
    socket.on(SOCKET_EVENTS_ENUM.BOARD_ADD_MEMBER, async (data: socketInterface.IAddBoardMember) => {
      try {
        const { hashData, boardId } = data
        await apiService.POST_BOARD_MEMBERS_BY_BOARD_ID_AND_HASH_DATA({
          hashData,
          boardId,
          token,
        })
        const result = await apiService.GET_BOARDS_ALL_MEMBERS_BY_ID({
          boardId,
          token,
        })
        namespace.to(boardId).emit(SOCKET_EVENTS_ENUM.BOARD_ADD_MEMBER_RESULT, {
          code: 0, // 成功
          result,
        })
      } catch (e) {
        handlerError(e as ErrorType, socket, SOCKET_EVENTS_ENUM.BOARD_ADD_MEMBER_RESULT)
      }
    })

    // 監聽建立看板列表
    socket.on(SOCKET_EVENTS_ENUM.BOARD_CREATE_LIST, async (data: socketInterface.IBoardCreatePayload) => {
      try {
        const { title, boardId } = data
        await apiService.POST_BOARD_LIST_BY_BOARD_ID({
          title,
          boardId,
          token,
        })
        const result = await apiService.GET_BOARD_BY_BOARD_ID({
          boardId,
          token,
        })
        namespace.to(boardId).emit(SOCKET_EVENTS_ENUM.BOARD_CREATE_LIST_RESULT, {
          code: 0,
          result,
        })
      } catch (e) {
        handlerError(e as ErrorType, socket, SOCKET_EVENTS_ENUM.BOARD_CREATE_LIST_RESULT)
      }
    })

    // 監聽建立看板列表標題
    socket.on(SOCKET_EVENTS_ENUM.BOARD_MODIFY_LIST_TITLE, async (data: socketInterface.IBoardModifyListTitle) => {
      try {
        const { title, listId, boardId } = data
        await apiService.PATCH_LIST_TITLE_BY_LIST_ID({
          title,
          listId,
          token,
        })
        const result = await apiService.GET_BOARD_BY_BOARD_ID({
          boardId,
          token,
        })
        namespace.to(boardId).emit(SOCKET_EVENTS_ENUM.BOARD_MODIFY_LIST_TITLE_RESULT, {
          code: 0,
          result,
        })
      } catch (e) {
        handlerError(e as ErrorType, socket, SOCKET_EVENTS_ENUM.BOARD_MODIFY_LIST_TITLE_RESULT)
      }
    })

    // 監聽封存看板列表事件
    socket.on(SOCKET_EVENTS_ENUM.BOARD_ARCHIVE_LIST, async (data: socketInterface.IBoardArchiveList) => {
      try {
        const { status, listId, boardId } = data
        await apiService.PATCH_LIST_STATUS_BY_LIST_ID({
          status,
          listId,
          token,
        })
        const result = await apiService.GET_BOARD_BY_BOARD_ID({
          boardId,
          token,
        })
        namespace.to(boardId).emit(SOCKET_EVENTS_ENUM.BOARD_ARCHIVE_LIST_RESULT, {
          code: 0,
          result,
        })
      } catch (e) {
        handlerError(e as ErrorType, socket, SOCKET_EVENTS_ENUM.BOARD_ARCHIVE_LIST_RESULT)
      }
    })

    // 監聽新增列表中卡片
    socket.on(SOCKET_EVENTS_ENUM.BOARD_CARD_CREATE, async (data: socketInterface.ICreateCardPayload) => {
      try {
        const { title, boardId, listId } = data
        await apiService.POST_LIST_CARD_BY_LIST_ID({
          title,
          listId,
          token,
        })
        const result = await apiService.GET_BOARD_BY_BOARD_ID({
          boardId,
          token,
        })
        namespace.to(boardId).emit(SOCKET_EVENTS_ENUM.BOARD_CARD_CREATE_RESULT, {
          code: 0,
          result,
        })
      } catch (e) {
        handlerError(e as ErrorType, socket, SOCKET_EVENTS_ENUM.BOARD_CARD_CREATE_RESULT)
      }
    })

    // 監聽修改單一卡片
    socket.on(SOCKET_EVENTS_ENUM.BOARD_CARD_MODIFY, async (data: socketInterface.IModifySingleCard) => {
      const { cardId, title, describe, startDate, endDate, proiority, boardId } = data
      try {
        await apiService.PATCH_CARD_BY_CARD_ID({
          cardId,
          title,
          describe,
          startDate,
          endDate,
          proiority,
          token,
        })
        const result = await apiService.GET_CARD_BY_CARD_ID({
          cardId,
          token,
        })
        namespace.to(boardId).emit(SOCKET_EVENTS_ENUM.BOARD_CARD_MODIFY_RESULT, {
          code: 0,
          result,
        })
      } catch (e) {
        handlerError(e as ErrorType, socket, SOCKET_EVENTS_ENUM.BOARD_CARD_MODIFY_RESULT)
      }
    })

    // 監聽移動列表位置
    socket.on(SOCKET_EVENTS_ENUM.BOARD_MOVE_LIST_POSITION, async (data: socketInterface.IModifyBoardListPosition) => {
      const { listId, boardId, finalPosition } = data
      try {
        await apiService.PATCH_LIST_POSITION_BY_LIST_ID({
          listId,
          finalPosition,
          token,
        })
        const result = await apiService.GET_BOARD_BY_BOARD_ID({
          boardId,
          token,
        })
        namespace.to(boardId).emit(SOCKET_EVENTS_ENUM.BOARD_MOVE_LIST_POSITION_RESULT, {
          code: 0,
          result,
        })
      } catch (e) {
        handlerError(e as ErrorType, socket, SOCKET_EVENTS_ENUM.BOARD_MOVE_LIST_POSITION_RESULT)
      }
    })

    // 監聽移動列表位置
    socket.on(SOCKET_EVENTS_ENUM.BOARD_MOVE_CARD_POSITION, async (data: socketInterface.IModifyBoardCardPosition) => {
      const { boardId, cardId, finalListId, finalPosition } = data
      try {
        await apiService.PATCH_CARD_POSITION_BY_CARD_ID({
          cardId,
          finalListId,
          finalPosition,
          token,
        })
        const result = await apiService.GET_BOARD_BY_BOARD_ID({
          boardId,
          token,
        })
        namespace.to(boardId).emit(SOCKET_EVENTS_ENUM.BOARD_MOVE_CARD_POSITION_RESULT, {
          code: 0,
          result,
        })
      } catch (e) {
        handlerError(e as ErrorType, socket, SOCKET_EVENTS_ENUM.BOARD_MOVE_CARD_POSITION_RESULT)
      }
    })

    // 新增看板標籤
    socket.on(SOCKET_EVENTS_ENUM.BOARD_CREATE_NEW_TAG, async (data: socketInterface.ICreateBoardNewTag) => {
      try {
        const { title, color, boardId } = data
        await apiService.POST_BOARD_TAGS_BY_BOARD_ID({
          title,
          color,
          boardId,
          token,
        })
        const result = await apiService.GET_BOARD_TAGS_BY_BOARD_ID({
          boardId,
          token,
        })
        namespace.to(boardId).emit(SOCKET_EVENTS_ENUM.BOARD_CREATE_NEW_TAG_RESULT, {
          code: 0, // 成功
          result,
        })
      } catch (e) {
        handlerError(e as ErrorType, socket, SOCKET_EVENTS_ENUM.BOARD_CREATE_NEW_TAG_RESULT)
      }
    })

    // 修改看板標籤
    socket.on(SOCKET_EVENTS_ENUM.BOARD_MODIFY_TAG, async (data: socketInterface.IModifyBoardTag) => {
      try {
        const { title, color, tagId, boardId } = data
        await apiService.PUT_BOARD_TAGS_BY_BOARD_ID({
          title,
          tagId,
          color,
          boardId,
          token,
        })
        const result = await apiService.GET_BOARD_TAGS_BY_BOARD_ID({
          boardId,
          token,
        })
        namespace.to(boardId).emit(SOCKET_EVENTS_ENUM.BOARD_MODIFY_TAG_RESULT, {
          code: 0, // 成功
          result,
        })
      } catch (e) {
        handlerError(e as ErrorType, socket, SOCKET_EVENTS_ENUM.BOARD_MODIFY_TAG_RESULT)
      }
    })

    // 刪除看板標籤
    socket.on(SOCKET_EVENTS_ENUM.BOARD_DELETE_TAG, async (data: socketInterface.IDeleteBoardTag) => {
      try {
        const { tagId, boardId } = data
        await apiService.DELETE_BOARD_TAGS_BY_BOARD_ID({
          tagId,
          boardId,
          token,
        })
        const result = await apiService.GET_BOARD_TAGS_BY_BOARD_ID({
          boardId,
          token,
        })
        namespace.to(boardId).emit(SOCKET_EVENTS_ENUM.BOARD_DELETE_TAG_RESULT, {
          code: 0, // 成功
          result,
        })
      } catch (e) {
        handlerError(e as ErrorType, socket, SOCKET_EVENTS_ENUM.BOARD_DELETE_TAG_RESULT)
      }
    })

    socket.on(SOCKET_EVENTS_ENUM.ATTACH_TAG_TO_CARD, async (data: socketInterface.IAttachTagToCard) => {
      try {
        const { tagId, cardId, boardId } = data
        await apiService.POST_CARD_TAG_BY_CARD_ID({
          tagId,
          cardId,
          token,
        })
        const result = await apiService.GET_CARD_BY_CARD_ID({
          cardId,
          token,
        })
        namespace.to(boardId).emit(SOCKET_EVENTS_ENUM.ATTACH_TAG_TO_CARD_RESULT, {
          code: 0, // 成功
          result,
        })
      } catch (e) {
        handlerError(e as ErrorType, socket, SOCKET_EVENTS_ENUM.ATTACH_TAG_TO_CARD_RESULT)
      }
    })

    socket.on(SOCKET_EVENTS_ENUM.REMOVE_TAG_FROM_CARD, async (data: socketInterface.IDeleteTagFromCard) => {
      try {
        const { tagId, cardId, boardId } = data
        await apiService.DELETE_CARD_TAG_BY_CARD_ID({
          tagId,
          cardId,
          token,
        })
        const result = await apiService.GET_CARD_BY_CARD_ID({
          cardId,
          token,
        })
        namespace.to(boardId).emit(SOCKET_EVENTS_ENUM.REMOVE_TAG_FROM_CARD_RESULT, {
          code: 0, // 成功
          result,
        })
      } catch (e) {
        handlerError(e as ErrorType, socket, SOCKET_EVENTS_ENUM.REMOVE_TAG_FROM_CARD_RESULT)
      }
    })

    // 新增卡片評論
    socket.on(SOCKET_EVENTS_ENUM.ADD_NEW_CARD_COMMENT, async (data: socketInterface.IAddCardComment) => {
      try {
        const { comment, cardId, boardId } = data
        await apiService.POST_CARD_COMMENT_BY_CARD_ID({
          comment,
          cardId,
          token,
        })
        const result = await apiService.GET_CARD_BY_CARD_ID({
          cardId,
          token,
        })
        namespace.to(boardId).emit(SOCKET_EVENTS_ENUM.ADD_NEW_CARD_COMMENT_RESULT, {
          code: 0, // 成功
          result,
        })
      } catch (e) {
        handlerError(e as ErrorType, socket, SOCKET_EVENTS_ENUM.ADD_NEW_CARD_COMMENT_RESULT)
      }
    })

    // 修改卡片評論
    socket.on(SOCKET_EVENTS_ENUM.MODIFT_CARD_COMMENT, async (data: socketInterface.IModifyCardComment) => {
      try {
        const { comment, cardId, boardId, commentId } = data
        await apiService.PUT_CARD_COMMENT_BY_CARD_ID({
          comment,
          commentId,
          cardId,
          token,
        })
        const result = await apiService.GET_CARD_BY_CARD_ID({
          cardId,
          token,
        })
        namespace.to(boardId).emit(SOCKET_EVENTS_ENUM.MODIFT_CARD_COMMENT_RESULT, {
          code: 0, // 成功
          result,
        })
      } catch (e) {
        handlerError(e as ErrorType, socket, SOCKET_EVENTS_ENUM.MODIFT_CARD_COMMENT_RESULT)
      }
    })

    // 刪除卡片評論
    socket.on(SOCKET_EVENTS_ENUM.DELETE_CARD_COMMENT, async (data: socketInterface.IDeleteCardComment) => {
      try {
        const { cardId, boardId, commentId } = data
        await apiService.DELETE_CARD_COMMENT_BY_CARD_ID({
          commentId,
          cardId,
          token,
        })
        const result = await apiService.GET_CARD_BY_CARD_ID({
          cardId,
          token,
        })
        namespace.to(boardId).emit(SOCKET_EVENTS_ENUM.DELETE_CARD_COMMENT_RESULT, {
          code: 0, // 成功
          result,
        })
      } catch (e) {
        handlerError(e as ErrorType, socket, SOCKET_EVENTS_ENUM.DELETE_CARD_COMMENT_RESULT)
      }
    })

    // 新增卡片 todo 標題
    socket.on(SOCKET_EVENTS_ENUM.ADD_CARD_TODO_TITLE, async (data: socketInterface.IAddNewTodoTitle) => {
      try {
        const { cardId, boardId, title } = data
        await apiService.POST_CARD_TODO_LIST_BY_CARD_ID({
          title,
          cardId,
          token,
        })
        const result = await apiService.GET_CARD_BY_CARD_ID({
          cardId,
          token,
        })

        namespace.to(boardId).emit(SOCKET_EVENTS_ENUM.ADD_CARD_TODO_TITLE_RESULT, {
          code: 0, // 成功
          result,
        })
      } catch (e) {
        handlerError(e as ErrorType, socket, SOCKET_EVENTS_ENUM.ADD_CARD_TODO_TITLE_RESULT)
      }
    })

    // 編輯卡片 todo 標題
    socket.on(SOCKET_EVENTS_ENUM.MODIFY_CARD_TODO_TITLE, async (data: socketInterface.IModifyTodoTitle) => {
      try {
        const { cardId, boardId, titleId, title } = data
        await apiService.PUT_CARD_TODO_LIST_BY_CARD_ID({
          title,
          cardId,
          titleId,
          token,
        })
        const result = await apiService.GET_CARD_BY_CARD_ID({
          cardId,
          token,
        })
        namespace.to(boardId).emit(SOCKET_EVENTS_ENUM.MODIFY_CARD_TODO_TITLE_RESULT, {
          code: 0, // 成功
          result,
        })
      } catch (e) {
        handlerError(e as ErrorType, socket, SOCKET_EVENTS_ENUM.MODIFY_CARD_TODO_TITLE_RESULT)
      }
    })

    // 刪除卡片 todo 標題
    socket.on(SOCKET_EVENTS_ENUM.DELETE_CARD_TODO, async (data: socketInterface.IDeleteTodo) => {
      try {
        const { cardId, boardId, titleId } = data
        await apiService.DELETE_CARD_TODO_LIST_BY_CARD_ID({
          cardId,
          titleId,
          token,
        })
        const result = await apiService.GET_CARD_BY_CARD_ID({
          cardId,
          token,
        })
        namespace.to(boardId).emit(SOCKET_EVENTS_ENUM.DELETE_CARD_TODO_RESULT, {
          code: 0, // 成功
          result,
        })
      } catch (e) {
        handlerError(e as ErrorType, socket, SOCKET_EVENTS_ENUM.DELETE_CARD_TODO_RESULT)
      }
    })

    // 新增卡片細項
    socket.on(SOCKET_EVENTS_ENUM.ADD_CARD_TODO_CONTENT, async (data: socketInterface.IAddTodoContent) => {
      try {
        const { cardId, boardId, titleId, content } = data
        await apiService.POST_CARD_TODO_LIST_CONTENT_BY_CARD_ID({
          cardId,
          titleId,
          content,
          token,
        })
        const result = await apiService.GET_CARD_BY_CARD_ID({
          cardId,
          token,
        })
        namespace.to(boardId).emit(SOCKET_EVENTS_ENUM.ADD_CARD_TODO_CONTENT_RESULT, {
          code: 0, // 成功
          result,
        })
      } catch (e) {
        handlerError(e as ErrorType, socket, SOCKET_EVENTS_ENUM.ADD_CARD_TODO_CONTENT_RESULT)
      }
    })

    // 修改卡片細項
    socket.on(SOCKET_EVENTS_ENUM.MODIFY_CARD_TODO_CONTENT, async (data: socketInterface.IModifyTodoContent) => {
      try {
        const { cardId, boardId, contentId, content, completed } = data
        await apiService.PUT_CARD_TODO_LIST_CONTENT_BY_CARD_ID({
          cardId,
          contentId,
          completed,
          content,
          token,
        })
        const result = await apiService.GET_CARD_BY_CARD_ID({
          cardId,
          token,
        })
        namespace.to(boardId).emit(SOCKET_EVENTS_ENUM.MODIFY_CARD_TODO_CONTENT_RESULT, {
          code: 0, // 成功
          result,
        })
      } catch (e) {
        handlerError(e as ErrorType, socket, SOCKET_EVENTS_ENUM.MODIFY_CARD_TODO_CONTENT_RESULT)
      }
    })

    // 刪除卡片細項
    socket.on(SOCKET_EVENTS_ENUM.DELETE_CARD_TODO_CONTENT, async (data: socketInterface.IDeleteTodoContent) => {
      try {
        const { cardId, boardId, contentId } = data
        await apiService.DELETE_CARD_TODO_LIST_CONTENT_BY_CARD_ID({
          cardId,
          contentId,
          token,
        })
        const result = await apiService.GET_CARD_BY_CARD_ID({
          cardId,
          token,
        })
        namespace.to(boardId).emit(SOCKET_EVENTS_ENUM.DELETE_CARD_TODO_CONTENT_RESULT, {
          code: 0, // 成功
          result,
        })
      } catch (e) {
        handlerError(e as ErrorType, socket, SOCKET_EVENTS_ENUM.DELETE_CARD_TODO_CONTENT_RESULT)
      }
    })

    // 卡片成員新增
    socket.on(SOCKET_EVENTS_ENUM.BOARD_CARD_ADD_MEMBER, async (data: socketInterface.IAddCardMember) => {
      try {
        const { memberId, boardId, cardId } = data
        await apiService.POST_CARD_MEMBER_BY_CARD_ID({
          cardId,
          memberId,
          token,
        })
        const result = await apiService.GET_CARD_BY_CARD_ID({
          cardId,
          token,
        })
        namespace.to(boardId).emit(SOCKET_EVENTS_ENUM.BOARD_CARD_ADD_MEMBER_RESULT, {
          code: 0, // 成功
          result,
        })
      } catch (e) {
        handlerError(e as ErrorType, socket, SOCKET_EVENTS_ENUM.BOARD_CARD_ADD_MEMBER_RESULT)
      }
    })

    // 卡片成員刪除
    socket.on(SOCKET_EVENTS_ENUM.BOARD_CARD_DELETE_MEMBER, async (data: socketInterface.IDeleteCardMember) => {
      try {
        const { memberId, boardId, cardId } = data
        await apiService.DELETE_CARD_MEMBER_BY_CARD_ID({
          cardId,
          memberId,
          token,
        })
        const result = await apiService.GET_CARD_BY_CARD_ID({
          cardId,
          token,
        })
        namespace.to(boardId).emit(SOCKET_EVENTS_ENUM.BOARD_CARD_DELETE_MEMBER_RESULT, {
          code: 0, // 成功
          result,
        })
      } catch (e) {
        handlerError(e as ErrorType, socket, SOCKET_EVENTS_ENUM.BOARD_CARD_DELETE_MEMBER_RESULT)
      }
    })

    // 卡片增加附件
    socket.on(SOCKET_EVENTS_ENUM.BOARD_CARD_UPLOAD_ATTACHMENT, async (data: socketInterface.IAddCardAttachment) => {
      try {
        const { file, fileName, boardId, cardId } = data
        await apiService.POST_CARD_ATTACHMENT_BY_CARD_ID({
          cardId,
          file,
          fileName,
          token,
        })
        const result = await apiService.GET_CARD_BY_CARD_ID({
          cardId,
          token,
        })
        namespace.to(boardId).emit(SOCKET_EVENTS_ENUM.BOARD_CARD_UPLOAD_ATTACHMENT_RESULT, {
          code: 0, // 成功
          result,
        })
      } catch (e) {
        handlerError(e as ErrorType, socket, SOCKET_EVENTS_ENUM.BOARD_CARD_UPLOAD_ATTACHMENT_RESULT)
      }
    })

    // 卡片刪除附件
    socket.on(SOCKET_EVENTS_ENUM.BOARD_CARD_DELETE_ATTACHMENT, async (data: socketInterface.IDeleteCardAttachment) => {
      try {
        const { fileId, boardId, cardId } = data
        await apiService.DELETE_CARD_ATTACHMENT_BY_CARD_ID({
          cardId,
          fileId,
          token,
        })
        const result = await apiService.GET_CARD_BY_CARD_ID({
          cardId,
          token,
        })
        namespace.to(boardId).emit(SOCKET_EVENTS_ENUM.BOARD_CARD_DELETE_ATTACHMENT_RESULT, {
          code: 0, // 成功
          result,
        })
      } catch (e) {
        handlerError(e as ErrorType, socket, SOCKET_EVENTS_ENUM.BOARD_CARD_DELETE_ATTACHMENT_RESULT)
      }
    })

    // 離線監聽
    socket.on('disconnect', () => {
      socket?.disconnect(true)
    })
  })
}

export default boardController
