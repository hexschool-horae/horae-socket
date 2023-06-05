interface IAuth {
  token: string
}
export interface IBasicResponse {
  success?: string
  message?: string
}

export interface IGetBoardByIdRequest extends IAuth {
  boardId: string
}

export interface IPostBoardListRequest extends IAuth {
  title: string
  boardId: string
}

export interface IGetBoardTagsByBoardIdRequest extends IAuth {
  boardId: string
}

export interface IGetBoardTagsByBoardIdResponse {
  success: string
  message: string
  data: [
    {
      _id: string
      title: string
      color: string
      boardId: string
      __v: number
    }
  ]
}

export interface IPostBoardTagsRequest extends IAuth {
  title: string
  color: string
  boardId: string
}

export interface IPutBoardTagsRequest extends IAuth {
  tagId: string
  title: string
  color: string
  boardId: string
}

export interface IPutBoardTagsResponse extends IBasicResponse {}

export interface IDeleteBoardTagsRequest extends IAuth {
  tagId: string
  boardId: string
}

export interface IDeleteBoardTagsResponse extends IBasicResponse {}

export interface IPostBoardCardByListIdRequest extends IAuth {
  title: string
  listId: string
}

export interface IPatchCardByCardIdRequest extends IAuth {
  boardId: string
  cardId: string
  title: string
  describe: string
  startDate: Date
  endDate: Date
  proiority: number
}

export interface IModifyBoardViewPermissionRequest extends IAuth {
  boardId: string
  viewSet: 'private' | 'public'
}

export interface IPatchBoardStatusByBoardIdRequest extends IAuth {
  boardId: string
  status: 'open' | 'close'
}

export interface IPatchBoardTitleByBoardIdRequest extends IAuth {
  boardId: string
  title: string
}

export interface IPatchBoardTitleByBoardIdResponse extends IBasicResponse {}

export interface IPatchBoardListTitleByListIdRequest extends IAuth {
  listId: string
  boardId: string
  title: string
}

export interface IPatchBoardListStatusByListIdRequest extends IAuth {
  listId: string
  boardId: string
  status: 'open' | 'close'
}

export interface IPostCardTagByCardIdRequest extends IAuth {
  tagId: string
  cardId: string
  boardId: string
}

export interface IDeleteCardTagByCardIdRequest extends IAuth {
  tagId: string
  cardId: string
  boardId: string
}
