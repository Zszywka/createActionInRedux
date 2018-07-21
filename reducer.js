import {ADD_COMMENT, REMOVE_COMMENT, EDIT_COMMENT, THUMB_UP_COMMENT, THUMB_DOWN_COMMENT } from './actionTypes'

//the state of the application before running the application
//when we use app first time
const initialState = {
    comments: [],
    users: []
};

//reductor
// function reducer(state, action) {
//   //when we use app first time
//   if (!state) {
//     return initialState;
//   }
//     return state;
// }

function reducer(state = initialState, action) {
  //recognize the appropriate type of action
  switch(action.type) {

    case ADD_COMMENT:
    //method Object.assign -> create the copy of state
    //or: Object.assign({...state, ...newState})
    //do obiektu{} dolaczamy kolejne comment, state->kopiujemy stan z teraz, ...state(nasz obiekt z nowym komentarzem)
      return Object.assign({}, state, {
        comments: [
        {
          id: action.id,
          text: action.text,
          votes: 0
        }
        , ...state]
      });

    case: REMOVE_COMMENT:
      return Object.assign({}, state, {
        comments: state.comments.filter(comment => comment.id !== action.id)
      });

    case: EDIT_COMMENT:
      return Object.assign({}, state, {
        comments: state.comments.map(comment => {
          if (comment.id === action.id){
            comment.text = action.text
          }
        })
      });

    case: THUMB_UP_COMMENT:
      return Object.assign({}, state, {
        comments: state.comments.map(comment => {
          if (comment.id === action.id){
            comment.tumbs += 1
          }
        })
      });

    case: THUMB_DOWN_COMMENT:
      return Object.assign({}, state, {
        comments: state.comments.map(comment => {
          if (comment.id === action.id){
            comment.tumbs -= 1
          }
        })
      });

    default:
      return state;
  }
}
