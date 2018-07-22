//change state of comment
//the initial state of the application is an empty table
function comments(state = [], action) {
  switch(action.type) {
    case ADD_COMMENT:
      return [{
        id: action.id,
        text: action.text
        tumbs: 0
      }, ...state.comments];

    case REMOVE_COMMENT:
      return
        state.filter(comment => action.id !== comment.id);

    case EDIT_COMMENT:
      return
        state.map(comment => {
          if (action.id === comment.id){
          comment.text = action.text
          }
        });

    case THUMB_UP_COMMENT:
      return
        state.map(comment => {
          if (action.id === comment.id){
          comment.thumbs += 1
          }
        });


    case THUMB_DOWN_COMMENT:
      return
        state.map(comment => {
          if (action.id === comment.id){
          comment.thumbs -= 1
          }
        });

    default:
      return state;
  }
}
