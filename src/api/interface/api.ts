export interface IGetBoardByIdRequest {
  boardId: string
  token: string
}
export interface IPostBoardListRequest {
  title: string
  boardId: string
  token: string
}

export interface IGetBoardTagsByBoardIdRequest {
  boardId: string
  token: string
}

export interface IPostBoardTagsRequest {
  title: string
  color: string
  boardId: string
  token: string
}

export interface IPutBoardTagsRequest {
  tagId: string
  title: string
  color: string
  boardId: string
  token: string
}

export interface IDeleteBoardTagsRequest {
  tagId: string
  boardId: string
  token: string
}

export interface IPostBoardCardByListIdRequest {
  title: string
  listId: string
  token: string
}

export interface IPatchCardByCardIdRequest {
  token: string
  boardId: string
  cardId: string
  title: string
  describe: string
  startDate: Date
  endDate: Date
  proiority: number
}

export interface IBasicResponse {
  success?: string
  message?: string
}

export interface IModifyBoardViewPermissionRequest {
  boardId: string
  viewSet: 'private' | 'public'
  token: string
}

export interface IPatchBoardStatusByBoardIdRequest {
  boardId: string
  status: 'open' | 'close'
  token: string
}

export interface IPatchBoardTitleByBoardIdRequest {
  boardId: string
  title: string
  token: string
}

export interface IPatchBoardListTitleByListIdRequest {
  listId: string
  boardId: string
  title: string
  token: string
}

export interface IPatchBoardListStatusByListIdRequest {
  listId: string
  boardId: string
  status: 'open' | 'close'
  token: string
}

export interface IPostCardTagByCardIdRequest {
  tagId: string
  cardId: string
  boardId: string
  token: string
}

export interface IDeleteCardTagByCardIdRequest {
  tagId: string
  cardId: string
  boardId: string
  token: string
}
