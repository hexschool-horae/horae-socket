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

export interface IGetBoardByIdResponse extends IBasicResponse {
  data: {
    _id: string
    title: string
    discribe: string
    coverPath: string
    viewSet: string
    members: Array<object>
    lists: Array<object>
    yourRole: string
    yourPermission: string
  }
}

export interface IPostBoardListRequest extends IAuth {
  title: string
  boardId: string
}

export interface IGetBoardTagsByBoardIdRequest extends IAuth {
  boardId: string
}

export interface IGetBoardTagsByBoardIdResponse extends IBasicResponse {
  data: Array<object>
}

export interface IGetAllBoardMembersByBoardIdRequest extends IAuth {
  boardId: string
}

interface IGetAllBoardMembersByBoardIdMember {
  userId: {
    _id: string
    name: string
    email: string
  }
  role: string
  inviteHashData: string
  _id: string
}

export interface IGetAllBoardMembersByBoardIdResponse extends IBasicResponse {
  title: string
  viewSet: string
  members: Array<IGetAllBoardMembersByBoardIdMember>
}

export interface IPostBoardMembersByBoardIdAndHashDataRequest extends IAuth {
  boardId: string
  hashData: string
}

export interface IPostBoardMembersByBoardIdAndHashDataResponse extends IBasicResponse {}

export interface IPatchBoardMembersByBoardIdRequest extends IAuth {
  role: string
  userId: string
  boardId: string
}

export interface IPatchBoardMembersByBoardIdResponse extends IBasicResponse {}

export interface IDeleteBoardMembersByBoardIdRequest extends IAuth {
  userId: string
  boardId: string
}

export interface IDeleteBoardMembersByBoardIdResponse extends IBasicResponse {}

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

export interface IPostBoardCardByListIdResponse extends IBasicResponse {}
export interface IGetBoardCardByCardIdRequest extends IAuth {
  cardId: string
}

export interface IGetBoardCardByCardIdResponse extends IBasicResponse {
  data: {
    _id: string
    title: string
    describe: string
    startDate: Date
    endDate: Date
    members: Array<object>
    comments: Array<object>
    tags: Array<object>
    todolists: Array<object>
    attachments: Array<object>
    proiority: string
    coverPath: string
    position: number
    updateUser: string
    createdAt: string
    updateAt: string
    version: number
  }
}

export interface IPatchCardByCardIdRequest extends IAuth {
  cardId: string
  title: string
  describe: string
  startDate: Date
  endDate: Date
  proiority: string
}

export interface IModifyBoardViewPermissionRequest extends IAuth {
  boardId: string
  viewSet: 'private' | 'public'
}

export interface IModifyBoardViewPermissionResponse extends IBasicResponse {}

export interface IPatchBoardStatusByBoardIdRequest extends IAuth {
  boardId: string
  status: 'open' | 'close'
}

export interface IPatchBoardStatusByBoardIdResponse extends IBasicResponse {}

export interface IPatchBoardTitleByBoardIdRequest extends IAuth {
  boardId: string
  title: string
}

export interface IPatchBoardTitleByBoardIdResponse extends IBasicResponse {}

export interface IPatchBoardListTitleByListIdRequest extends IAuth {
  listId: string
  title: string
}

export interface IPatchBoardListStatusByListIdRequest extends IAuth {
  listId: string
  status: 'open' | 'close'
}

export interface IPatchBoardListPositionByListIdRequest extends IAuth {
  listId: string
  finalPosition: number
}

export interface IPatchBoardListPositionByListIdResponse extends IBasicResponse {}

export interface IPostCardTagByCardIdRequest extends IAuth {
  tagId: string
  cardId: string
}

export interface IPostCardTagByCardIdResponse extends IBasicResponse {}

export interface IDeleteCardTagByCardIdRequest extends IAuth {
  tagId: string
  cardId: string
}

export interface IDeleteCardTagByCardIdResponse extends IBasicResponse {}

export interface IPostCardCommentByCardIdRequest extends IAuth {
  comment: string
  cardId: string
}

export interface IPostCardCommentByCardIdResponse extends IBasicResponse {}

export interface IPutCardCommentByCardIdRequest extends IAuth {
  comment: string
  commentId: string
  cardId: string
}

export interface IPutCardCommentByCardIdResponse extends IBasicResponse {}

export interface IDeleteCardCommentByCardIdRequest extends IAuth {
  commentId: string
  cardId: string
}

export interface IDeleteCardCommentByCardIdResponse extends IBasicResponse {}

export interface IPostCardTodoListByCardIdRequest extends IAuth {
  title: string
  cardId: string
}

export interface IPostCardTodoListByCardIdResponse extends IBasicResponse {}

export interface IPutCardTodoListByCardIdRequest extends IAuth {
  title: string
  titleId: string
  cardId: string
}

export interface IPutCardTodoListByCardIdResponse extends IBasicResponse {}

export interface IDeleteCardTodoListByCardIdRequest extends IAuth {
  titleId: string
  cardId: string
}

export interface IDeleteCardTodoListByCardIdResponse extends IBasicResponse {}

export interface IPostCardTodoListContentByCardIdRequest extends IAuth {
  titleId: string
  cardId: string
  content: string
}

export interface IPostCardTodoListContentByCardIdResponse extends IBasicResponse {}

export interface IPutCardTodoListContentByCardIdRequest extends IAuth {
  cardId: string
  contentId: string
  content: string
  completed: boolean
}

export interface IPutCardTodoListContentByCardIdResponse extends IBasicResponse {}

export interface IDeleteCardTodoListContentByCardIdRequest extends IAuth {
  cardId: string
  contentId: string
}

export interface IDeleteCardTodoListContentByCardIdResponse extends IBasicResponse {}
