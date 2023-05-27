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
