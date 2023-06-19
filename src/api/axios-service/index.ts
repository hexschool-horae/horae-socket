import axios from '../axios'
import apiPath from '../path'
import * as interfaces from '../interface/api'

export const PATCH_BOARD_VIEW_SET_BY_BOARD_ID = (payload: interfaces.IModifyBoardViewPermissionRequest) => {
  const url = apiPath.PATCH_BOARD_VIEW_SET_BY_BOARD_ID.replace(':board-id', payload.boardId)
  return axios.patch<interfaces.IModifyBoardViewPermissionResponse>(url, payload)
}

export const PATCH_BOARD_STATUS_BY_BOARD_ID = (payload: interfaces.IPatchBoardStatusByBoardIdRequest) => {
  const url = apiPath.PATCH_BOARD_STATUS_BY_BOARD_ID.replace(':board-id', payload.boardId)
  return axios.patch<interfaces.IPatchBoardStatusByBoardIdResponse>(url, payload)
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

export const PATCH_LIST_POSITION_BY_LIST_ID = (payload: interfaces.IPatchBoardListPositionByListIdRequest) => {
  const url = apiPath.PATCH_LIST_POSITION_BY_LIST_ID.replace(':list-id', payload.listId)
  return axios.patch<interfaces.IPatchBoardListPositionByListIdResponse>(url, payload)
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

export const GET_BOARDS_ALL_MEMBERS_BY_ID = (payload: interfaces.IGetAllBoardMembersByBoardIdRequest) => {
  const url = apiPath.GET_BOARDS_ALL_MEMBERS_BY_ID.replace(':board-id', payload.boardId)
  return axios.get<interfaces.IGetAllBoardMembersByBoardIdResponse>(url, payload)
}

export const POST_BOARD_MEMBERS_BY_BOARD_ID_AND_HASH_DATA = (
  payload: interfaces.IPostBoardMembersByBoardIdAndHashDataRequest
) => {
  let url = apiPath.POST_BOARD_MEMBERS_BY_BOARD_ID_AND_HASH_DATA.replace(':board-id', payload.boardId)
  url = url.replace(':hash-data', payload.hashData)
  return axios.post<interfaces.IPostBoardMembersByBoardIdAndHashDataResponse>(url, payload)
}

export const PATCH_BOARD_MEMBERS_BY_BOARD_ID = (payload: interfaces.IPatchBoardMembersByBoardIdRequest) => {
  const url = apiPath.PATCH_BOARD_MEMBERS_BY_BOARD_ID.replace(':board-id', payload.boardId)
  return axios.patch<interfaces.IPatchBoardMembersByBoardIdResponse>(url, payload)
}

export const DELETE_BOARD_MEMBERS_BY_BOARD_ID = (payload: interfaces.IDeleteBoardMembersByBoardIdRequest) => {
  const url = apiPath.DELETE_BOARD_MEMBERS_BY_BOARD_ID.replace(':board-id', payload.boardId)
  return axios.delete<interfaces.IDeleteBoardMembersByBoardIdResponse>(url, payload)
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
  return axios.post<interfaces.IPostCardTagByCardIdResponse>(url, payload)
}

export const DELETE_CARD_TAG_BY_CARD_ID = (payload: interfaces.IDeleteCardTagByCardIdRequest) => {
  const url = apiPath.DELETE_CARD_TAG_BY_CARD_ID.replace(':card-id', payload.cardId)
  return axios.delete<interfaces.IDeleteCardTagByCardIdResponse>(url, payload)
}

export const POST_CARD_COMMENT_BY_CARD_ID = (payload: interfaces.IPostCardCommentByCardIdRequest) => {
  const url = apiPath.POST_CARD_COMMENT_BY_CARD_ID.replace(':card-id', payload.cardId)
  return axios.post<interfaces.IPostCardCommentByCardIdResponse>(url, payload)
}

export const PUT_CARD_COMMENT_BY_CARD_ID = (payload: interfaces.IPutCardCommentByCardIdRequest) => {
  const url = apiPath.PUT_CARD_COMMENT_BY_CARD_ID.replace(':card-id', payload.cardId)
  return axios.put<interfaces.IPutCardCommentByCardIdResponse>(url, payload)
}

export const DELETE_CARD_COMMENT_BY_CARD_ID = (payload: interfaces.IDeleteCardCommentByCardIdRequest) => {
  const url = apiPath.DELETE_CARD_COMMENT_BY_CARD_ID.replace(':card-id', payload.cardId)
  return axios.put<interfaces.IDeleteCardCommentByCardIdResponse>(url, payload)
}

export const POST_CARD_TODO_LIST_BY_CARD_ID = (payload: interfaces.IPostCardTodoListByCardIdRequest) => {
  const url = apiPath.POST_CARD_TODO_LIST_BY_CARD_ID.replace(':card-id', payload.cardId)
  return axios.put<interfaces.IPostCardTodoListByCardIdResponse>(url, payload)
}

export const PUT_CARD_TODO_LIST_BY_CARD_ID = (payload: interfaces.IPutCardTodoListByCardIdRequest) => {
  const url = apiPath.PUT_CARD_TODO_LIST_BY_CARD_ID.replace(':card-id', payload.cardId)
  return axios.put<interfaces.IPutCardTodoListByCardIdResponse>(url, payload)
}

export const DELETE_CARD_TODO_LIST_BY_CARD_ID = (payload: interfaces.IDeleteCardTodoListByCardIdRequest) => {
  const url = apiPath.DELETE_CARD_TODO_LIST_BY_CARD_ID.replace(':card-id', payload.cardId)
  return axios.put<interfaces.IDeleteCardTodoListByCardIdResponse>(url, payload)
}

export const POST_CARD_TODO_LIST_CONTENT_BY_CARD_ID = (payload: interfaces.IPostCardTodoListContentByCardIdRequest) => {
  const url = apiPath.POST_CARD_TODO_LIST_CONTENT_BY_CARD_ID.replace(':card-id', payload.cardId)
  return axios.put<interfaces.IPostCardTodoListContentByCardIdResponse>(url, payload)
}

export const PUT_CARD_TODO_LIST_CONTENT_BY_CARD_ID = (payload: interfaces.IPutCardTodoListContentByCardIdRequest) => {
  const url = apiPath.PUT_CARD_TODO_LIST_CONTENT_BY_CARD_ID.replace(':card-id', payload.cardId)
  return axios.put<interfaces.IPutCardTodoListContentByCardIdResponse>(url, payload)
}

export const DELETE_CARD_TODO_LIST_CONTENT_BY_CARD_ID = (
  payload: interfaces.IDeleteCardTodoListContentByCardIdRequest
) => {
  const url = apiPath.DELETE_CARD_TODO_LIST_CONTENT_BY_CARD_ID.replace(':card-id', payload.cardId)
  return axios.put<interfaces.IDeleteCardTodoListContentByCardIdResponse>(url, payload)
}

export const POST_CARD_MEMBER_BY_CARD_ID = (payload: interfaces.IPostCardMemberByCardIdRequest) => {
  const url = apiPath.POST_CARD_MEMBER_BY_CARD_ID.replace(':card-id', payload.cardId)
  return axios.post<interfaces.IPostCardMemberByCardIdResponse>(url, payload)
}

export const DELETE_CARD_MEMBER_BY_CARD_ID = (payload: interfaces.IDeleteCardMemberByCardIdRequest) => {
  const url = apiPath.DELETE_CARD_MEMBER_BY_CARD_ID.replace(':card-id', payload.cardId)
  return axios.post<interfaces.IDeleteCardMemberByCardIdResponse>(url, payload)
}

export const POST_CARD_ATTACHMENT_BY_CARD_ID = (payload: interfaces.IAddCardAttachmentByIdRequest) => {
  const url = apiPath.POST_CARD_ATTACHMENT_BY_CARD_ID.replace(':card-id', payload.cardId)
  return axios.post<interfaces.IAddCardAttachmentByIdResponse>(url, payload)
}

export const DELETE_CARD_ATTACHMENT_BY_CARD_ID = (payload: interfaces.IDeleteCardAttachmentByCardIdRequest) => {
  const url = apiPath.DELETE_CARD_ATTACHMENT_BY_CARD_ID.replace(':card-id', payload.cardId)
  return axios.delete<interfaces.IDeleteCardAttachmentByCardIdResponse>(url, payload)
}

export const PATCH_BOARD_COVER_BY_BOARD_ID = (payload: interfaces.IUpdateBoardCoverRequest) => {
  const url = apiPath.PATCH_BOARD_COVER_BY_BOARD_ID.replace(':board-id', payload.boardId)
  return axios.patch<interfaces.IUpdateBoardCoverResponse>(url, payload)
}

export const DELETE_BOARD_COVER_BY_BOARD_ID = (payload: interfaces.IDeleteBoardCoverRequest) => {
  const url = apiPath.DELETE_BOARD_COVER_BY_BOARD_ID.replace(':board-id', payload.boardId)
  return axios.delete<interfaces.IDeleteBoardCoverResponse>(url, payload)
}

export const PATCH_BOARD_THEME_BY_BOARID_ID = (payload: interfaces.IPatchBoardThemeByBoardIdRequest) => {
  const url = apiPath.PATCH_BOARD_THEME_BY_BOARID_ID.replace(':board-id', payload.boardId)
  return axios.patch<interfaces.IPatchBoardThemeByBoardIdResponse>(url, payload)
}
