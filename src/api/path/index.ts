export default {
  PATCH_USER_PROFILE: '/user/profile',
  GET_USER_PROFILE: '/user/profile',
  GET_USER_BOARDS: '/user/boards',
  PUT_USER_RESET_PWD: '/user/reset-pwd',
  POST_WORK_SPACE: '/work-space',
  GET_WORK_SPACE: '/work-space',
  GET_WORK_SPACE_BY_ID: '/work-space/:w-id',
  DELETE_WORK_SPACE_BY_ID: '/work-space/:w-id',
  PATCH_WORK_SPACE_BY_ID: '/work-space/:w-id',
  GET_WORKSPACE_MEMBERS_BY_ID: '/work-space/:w-id/members',
  POST_WORKSPACE_INVITATION_LINK_BY_ID: '/work-space/:w-id/invitation-link',
  POST_WORKSPACE_INVITATION_SNED_MAIL_BY_ID: '/work-space/:w-id/invitation-sendMail',
  POST_WORKSPACE_MEMBERS_BY_ID_AND_HASH: '/work-space/:w-id/members/:hashData',
  DELETE_WORKSPACE_MEMBES_BY_ID: '/work-space/:w-id/members',
  PATCH_WORK_SPACE_MEMBERS_BY_ID: '/work-space/:w-id/members',
  POST_BOARD: '/board',
  PATCH_BOARD_BY_ID: '/board/:board-id',
  PATCH_BOARD_VISIBLE_BY_ID: '/board/:board-id/visible',
  DELETE_BOARD_BY_ID: '/board/:board-id/delete',
  GET_BOARD_BY_ID: '/board/:board-id',
  GET_BOARDS_ALL_MEMBERS_BY_ID: '/board/:board-id/members',
  POST_BOARD_MEMBERS_BY_ID: '/board/:board-id/members',
  PATCH_BOARD_MEMBERS_BY_ID: '/board/:board-id/members',
  DELETE_BOARD_MEMBERS_BY_ID: '/board/:board-id/members',
  POST_BOARD_COVER_BY_ID: '/board/:board-id/cover',
  PUT_BOARD_COVER_BY_ID: '/board/:board-id/cover',
  DELETE_BOARD_COVER_BY_ID: '/board/:board-id/cover',
  PUT_CARD_BY_ID: '/card/:card-id',
  PATCH_CARD_VISIBLE_BY_ID: '/card/:card-id/visible',
  POST_CARD_ATTACH_BY_ID: '/card/:card-id/attach',

  // 實作開始
  PATCH_BOARD_LIST_BY_ID: '/board/:board-id/list/:list-id',
  PATCH_BOARD_LIST_VISIBLE_BY_ID: '/board/:board-id/list/:list-id/visable',
  GET_BOARD_LIST_BY_ID: '/board/:board-id/list',
  PATCH_BOARD_VIEW_SET_BY_BOARD_ID: '/board/:board-id/viewSet',
  PATCH_BOARD_STATUS_BY_BOARD_ID: '/board/:board-id/status',
  PATCH_BOARD_TITLE_BY_BOARD_ID: '/board/:board-id/title',
  GET_BOARD_BY_BOARD_ID: '/board/:board-id',
  POST_BOARD_LIST_BY_BOARD_ID: '/board/:board-id/list',
  PATCH_LIST_TITLE_BY_LIST_ID: '/list/:list-id/title',
  PATCH_LIST_STATUS_BY_LIST_ID: '/list/:list-id/status',
  POST_BOARD_TAGS_BY_BOARD_ID: '/board/:board-id/tags',
  PUT_BOARD_TAGS_BY_BOARD_ID: '/board/:board-id/tags',
  DELETE_BOARD_TAGS_BY_BOARD_ID: '/board/:board-id/tags',
  GET_BOARD_TAGS_BY_BOARD_ID: '/board/:board-id/tags',
  POST_LIST_CARD_BY_LIST_ID: '/list/:list-id/card',
  GET_CARD_BY_ID: '/card/:card-id',
  PATCH_CARD_BY_CARD_ID: '/card/:card-id',
  POST_CARD_TAG_BY_CARD_ID: '/card/:card-id/tag',
  DELETE_CARD_TAG_BY_CARD_ID: '/card/:card-id/tag',
  POST_CARD_COMMENT_BY_CARD_ID: '/card/:card-id/tag',
  PUT_CARD_COMMENT_BY_CARD_ID: '/card/:card-id/tag',
  DELETE_CARD_COMMENT_BY_CARD_ID: '/card/:card-id/tag',
}
