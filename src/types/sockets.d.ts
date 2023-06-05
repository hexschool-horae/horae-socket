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
