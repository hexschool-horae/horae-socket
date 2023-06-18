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

export interface IModifyBoardMemberPermission {
  role: string
  userId: string
  boardId: string
}

export interface IDeleteBoardMember {
  userId: string
  boardId: string
}

export interface IAddBoardMember {
  boardId: string
  hashData: string
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

// 移動列表位置
export interface IModifyBoardListPosition {
  boardId: string
  listId: string
  finalPosition: number
}

// 移動卡片位置
export interface IModifyBoardCardPosition {
  boardId: string
  cardId: string
  finalListId: string
  finalPosition: number
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

// 新增卡片 todo 標題
export interface IAddNewTodoTitle {
  cardId: string
  boardId: string
  title: string
}

// 修改卡片 todo 標題
export interface IModifyTodoTitle {
  cardId: string
  titleId: string
  boardId: string
  title: string
}

// 刪除卡片 todo 標題
export interface IDeleteTodo {
  cardId: string
  titleId: string
  boardId: string
}

// 新增卡片細項
export interface IAddTodoContent {
  cardId: string
  titleId: string
  boardId: string
  content: string
}

// 編輯卡片細項
export interface IModifyTodoContent {
  cardId: string
  boardId: string
  contentId: string
  content: string
  completed: boolean
}

// 編輯卡片細項
export interface IDeleteTodoContent {
  cardId: string
  boardId: string
  contentId: string
}

// 卡片成員新增
export interface IAddCardMember {
  cardId: string
  memberId: string
  boardId: string
}

// 卡片成員移除
export interface IDeleteCardMember {
  cardId: string
  memberId: string
  boardId: string
}

// 卡片新增附件
export interface IAddCardAttachment {
  cardId: string
  boardId: string
  file: File
}

// 卡片刪除附件
export interface IDeleteCardAttachment {
  cardId: string
  boardId: string
  fileId: string
}

// 看板新增封面
export interface IBoardUpdateCover {
  boardId: string
  fileURL: string
}

// 看板新增封面
export interface IBoardDeleteCover {
  boardId: string
}
