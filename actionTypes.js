const ADD_COMMENT = 'ADD_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

{
  type: ADD_COMMENT,
  text: 'My first comment !',
  id: 1
}

{
  type: REMOVE_COMMENT,
  text: 'Remove my first comment !',
  id: 2
}

{
  type: EDIT_COMMENT,
  text: 'Edit comment !',
  id: 2
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
