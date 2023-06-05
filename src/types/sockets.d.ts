export interface IBoardRoomPayload {
  boardId: string
}

export interface IBoardCreatePayload {
  title: string
  boardId: string
}

export interface ICreateCardPayload {
  title: string
  boardId: string
  listId: string
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
export interface IAddNewCardCommnet {
  comment: string
  cardId: string
  boardId: string
}
