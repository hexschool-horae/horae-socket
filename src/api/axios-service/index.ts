import axios from '../axios'
import apiPath from '../path'
import * as interfaces from '../interface/api'

export const GET_BOARD_BY_BOARD_ID = (payload: interfaces.IGetBoardByIdRequest) => {
  const url = apiPath.GET_BOARD_BY_BOARD_ID.replace(':board-id', payload.boardId)
  return axios.get<interfaces.IGetBoardByIdRequest>(url, payload)
}

export const POST_BOARD_LIST_BY_ID = (payload: interfaces.IPostBoardListRequest) => {
  const url = apiPath.POST_BOARD_LIST_BY_ID.replace(':board-id', payload.boardId)
  return axios.post<interfaces.IPostBoardListRequest>(url, payload)
}

export const GET_BOARD_TAGS_BY_BOARD_ID = (payload: interfaces.IGetBoardTagsByBoardIdRequest) => {
  const url = apiPath.GET_BOARD_TAGS_BY_BOARD_ID.replace(':board-id', payload.boardId)
  return axios.get<interfaces.IGetBoardTagsByBoardIdRequest>(url, payload)
}

export const POST_BOARD_TAGS_BY_BOARD_ID = (payload: interfaces.IPostBoardTagsRequest) => {
  const url = apiPath.POST_BOARD_TAGS_BY_BOARD_ID.replace(':board-id', payload.boardId)
  return axios.post<interfaces.IPostBoardTagsRequest>(url, payload)
}

export const PUT_BOARD_TAGS_BY_BOARD_ID = (payload: interfaces.IPutBoardTagsRequest) => {
  const url = apiPath.PUT_BOARD_TAGS_BY_BOARD_ID.replace(':board-id', payload.boardId)
  return axios.put<interfaces.IPutBoardTagsRequest>(url, payload)
}

export const DELETE_BOARD_TAGS_BY_BOARD_ID = (payload: interfaces.IDeleteBoardTagsRequest) => {
  const url = apiPath.DELETE_BOARD_TAGS_BY_BOARD_ID.replace(':board-id', payload.boardId)
  return axios.delete<interfaces.IDeleteBoardTagsRequest>(url, payload)
}

export const POST_LIST_CARD_BY_ID = (payload: interfaces.IPostBoardCardByListIdRequest) => {
  const url = apiPath.POST_LIST_CARD_BY_LIST_ID.replace(':list-id', payload.listId)
  return axios.post<interfaces.IPostBoardCardByListIdRequest>(url, payload)
}
