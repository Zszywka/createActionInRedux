import uuid from uuid;
//import actions
import {ADD_COMMENT, REMOVE_COMMENT, EDIT_COMMENT, THUMB_UP_COMMENT, THUMB_DOWN_COMMENT } from './actionTypes'


//creators
function addComment(text) {
  return {
    type: ADD_COMMENT,
    text,
    id: uuid.v4()
  }
}
function removeComment(id) {
  return {
    type: REMOVE_COMMENT,
    id
  }
}
function editComment(text, id) {
  return {
    type: EDIT_COMMENT,
    text,
    id
  }
}
function thumbUpComment(id, tumbs) {
  return {
    type: THUMB_UP_COMMENT,
    id,
    thumbs: thumbs + 1
  }
}
function thumbDownComment(id, tumbs) {
  return {
    type: THUMB_DOWN_COMMENT,
    id,
    thumbs: thumbs - 1
  }
}
//dispatch -> send the action(the object)
// dispatch(addComment('nowy komentarz!'));
// dispatch(addComment('kolejny nowy komentarz!'));

//or creator actions and send the action(dispatch)
const boundAddComment = text => dispatch(addComment(text));
boundAddComment('nowy komentarz!');
boundAddComment('kolejny nowy komentarz!');
const boundRemoveComment = id => dispatch(removeComment(id));
boundRemoveComment(2);
const boundEditComment = (text, id) => dispatch(editComment(text, id));
boundEditComment('edytowany komentarz', 1);
const boundThumbUpComment = (id, tumbs) => dispatch(thumbUpComment(id, tumbs));
boundThumbUpComment(1, 1);
const boundThumbDownComment = (id, tumbs) => dispatch(thumbDownComment(id, tumbs));
boundThumbDownComment (1, 1);
