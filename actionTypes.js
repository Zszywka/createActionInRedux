export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

{
  type: ADD_COMMENT,
  text: 'My first comment !',
  id: 1,
  thumbs: 0
}

{
  type: REMOVE_COMMENT,
  text: 'Remove my first comment !',
  id: 2,
  thumbs: 0
}

{
  type: EDIT_COMMENT,
  text: 'Edit comment !',
  id: 2,
  thumbs: 0
}

{
  type: THUMB_UP_COMMENT,
  text: 'Edit my first comment !',
  id: 3,
  thumbs: 2
}

{
  type: THUMB_DOWN_COMMENT,
  text: 'Edit my first comment !',
  id: 1,
  thumbs: 1
}
