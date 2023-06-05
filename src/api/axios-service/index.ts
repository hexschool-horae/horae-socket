import axios from '../axios'
import apiPath from '../path'
import * as interfaces from '../interface/api'

export const PATCH_BOARD_VIEW_SET = (payload: interfaces.IModifyBoardViewPermissionRequest) => {
  const url = apiPath.PATCH_BOARD_VIEW_SET_BY_BOARD_ID.replace(':board-id', payload.boardId)
  return axios.post(url, payload)
}

export const PATCH_BOARD_STATUS_BY_BOARD_ID = (payload: interfaces.IPatchBoardStatusByBoardIdRequest) => {
  const url = apiPath.PATCH_BOARD_STATUS_BY_BOARD_ID.replace(':board-id', payload.boardId)
  return axios.patch(url, payload)
}

export const PATCH_BOARD_TITLE_BY_BOARD_ID = (payload: interfaces.IPatchBoardTitleByBoardIdRequest) => {
  const url = apiPath.PATCH_BOARD_TITLE_BY_BOARD_ID.replace(':board-id', payload.boardId)
  return axios.patch(url, payload)
}

export const GET_BOARD_BY_BOARD_ID = (payload: interfaces.IGetBoardByIdRequest) => {
  const url = apiPath.GET_BOARD_BY_BOARD_ID.replace(':board-id', payload.boardId)
  return axios.get<interfaces.IGetBoardByIdResponse>(url, payload)
}

export const POST_BOARD_LIST_BY_BOARD_ID = (payload: interfaces.IPostBoardListRequest) => {
  const url = apiPath.POST_BOARD_LIST_BY_BOARD_ID.replace(':board-id', payload.boardId)
  return axios.post(url, payload)
}

export const PATCH_LIST_TITLE_BY_LIST_ID = (payload: interfaces.IPatchBoardListTitleByListIdRequest) => {
  const url = apiPath.PATCH_LIST_TITLE_BY_LIST_ID.replace(':list-id', payload.listId)
  return axios.patch(url, payload)
}

export const PATCH_LIST_STATUS_BY_LIST_ID = (payload: interfaces.IPatchBoardListStatusByListIdRequest) => {
  const url = apiPath.PATCH_LIST_STATUS_BY_LIST_ID.replace(':list-id', payload.listId)
  return axios.patch(url, payload)
}

export const POST_BOARD_TAGS_BY_BOARD_ID = (payload: interfaces.IPostBoardTagsRequest) => {
  const url = apiPath.POST_BOARD_TAGS_BY_BOARD_ID.replace(':board-id', payload.boardId)
  return axios.post(url, payload)
}

export const PUT_BOARD_TAGS_BY_BOARD_ID = (payload: interfaces.IPutBoardTagsRequest) => {
  const url = apiPath.PUT_BOARD_TAGS_BY_BOARD_ID.replace(':board-id', payload.boardId)
  return axios.put<interfaces.IPutBoardTagsResponse>(url, payload)
}

export const DELETE_BOARD_TAGS_BY_BOARD_ID = (payload: interfaces.IDeleteBoardTagsRequest) => {
  const url = apiPath.DELETE_BOARD_TAGS_BY_BOARD_ID.replace(':board-id', payload.boardId)
  return axios.delete<interfaces.IDeleteBoardTagsResponse>(url, payload)
}

export const GET_BOARD_TAGS_BY_BOARD_ID = (payload: interfaces.IGetBoardTagsByBoardIdRequest) => {
  const url = apiPath.GET_BOARD_TAGS_BY_BOARD_ID.replace(':board-id', payload.boardId)
  return axios.get<interfaces.IGetBoardTagsByBoardIdResponse>(url, payload)
}

export const POST_LIST_CARD_BY_LIST_ID = (payload: interfaces.IPostBoardCardByListIdRequest) => {
  const url = apiPath.POST_LIST_CARD_BY_LIST_ID.replace(':list-id', payload.listId)
  return axios.post<interfaces.IPostBoardCardByListIdResponse>(url, payload)
}

export const GET_CARD_BY_CARD_ID = (payload: interfaces.IGetBoardCardByCardIdRequest) => {
  const url = apiPath.GET_CARD_BY_CARD_ID.replace(':card-id', payload.cardId)
  return axios.get<interfaces.IGetBoardCardByCardIdResponse>(url, payload)
}

export const PATCH_CARD_BY_CARD_ID = (payload: interfaces.IPatchCardByCardIdRequest) => {
  const url = apiPath.PATCH_CARD_BY_CARD_ID.replace(':card-id', payload.cardId)
  return axios.patch(url, payload)
}

export const POST_CARD_TAG_BY_CARD_ID = (payload: interfaces.IPostCardTagByCardIdRequest) => {
  const url = apiPath.PATCH_CARD_BY_CARD_ID.replace(':card-id', payload.cardId)
  return axios.patch(url, payload)
}

export const DELETE_CARD_TAG_BY_CARD_ID = (payload: interfaces.IDeleteCardTagByCardIdRequest) => {
  const url = apiPath.DELETE_CARD_TAG_BY_CARD_ID.replace(':card-id', payload.cardId)
  return axios.patch(url, payload)
}
