import axios from '../axios'
import apiPath from '../path'
import * as interfaces from '../interface/api'

// export const GET_BOARD_LIST_BY_ID = (payload: interfaces.IPostBoardListRequest) => {
//   return axios.get<interfaces.IPostBoardListRequest>(apiPath.POST_BOARD_LIST_BY_ID, payload)
// }

export const POST_BOARD_LIST_BY_ID = (payload: interfaces.IPostBoardListRequest) => {
  const url = apiPath.POST_BOARD_LIST_BY_ID.replace(':board-id', payload.boardId)
  return axios.post<interfaces.IPostBoardListRequest>(url, payload)
}
