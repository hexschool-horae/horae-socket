export interface IBoardRoomPayload {
  boardId: string
}

export interface IBoardCreatePayload {
  title: string
  boardId: string
}

export interface IBoardModifyListTitle {
  title: string
  listId: string
  boardId: string
}

export interface IBoardArchiveList {
  status: 'open' | 'close'
  listId: string
  boardId: string
}

export interface ICreateCardPayload {
  title: string
  boardId: string
  listId: string
}

export interface IModifyBoardViewSet {
  viewSet: 'private' | 'public'
  boardId: string
}

export interface IArchiveBoardStatus {
  status: 'open' | 'close'
  boardId: string
}

export interface IModifyBoardTitlePayload {
  title: string
  boardId: string
}

export interface ICreateBoardNewTag {
  title: string
  color: string
  boardId: string
}

export interface IModifyBoardTag {
  title: string
  color: string
  tagId: string
  boardId: string
}

export interface IDeleteBoardTag {
  tagId: string
  boardId: string
}

// 修改單一卡片
export interface IModifySingleCard {
  boardId: string
  cardId: string
  title: string
  describe: string
  startDate: Date
  endDate: Date
  proiority: string
}

// 在卡片新增標籤
export interface IAttachTagToCard {
  boardId: string
  cardId: string
  tagId: string
}

// 刪除卡片上的標籤
export interface IDeleteTagFromCard {
  boardId: string
  cardId: string
  tagId: string
}

// 新增卡片評論
export interface IAddCardComment {
  comment: string
  cardId: string
  boardId: string
}

// 修改卡片評論
export interface IModifyCardComment {
  comment: string
  commentId: string
  cardId: string
  boardId: string
}

// 刪除卡片評論
export interface IDeleteCardComment {
  commentId: string
  cardId: string
  boardId: string
}
