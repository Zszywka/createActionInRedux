import { combineReducers } from 'redux';
import comments from './comments';
import users from './users';

// Main reducer
function app(state = initialState, action) {
  return {
    comments: comments(state.comments, action),
    users: users(state.users, action)
  };
}
//or:
//Redux give the subsidiaryReducers function,
//this function connect reducers with each other
const app = combineReducers({
    comments,
    users
});
