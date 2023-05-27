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
