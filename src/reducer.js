function userReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
    case "REGISTER":
      console.log("login trigger");
      return action.username;
    case "LOGOUT":
      return "";

    default:
      return state.user;
  }
}

function postReducer(state, action) {
  switch (action.type) {
    case "CREATE_POST":
      const { title, content, author } = action;
      const newPost = {
        title,
        content,
        author,
      };
      return [newPost, ...state];

    default:
      return state.posts;
  }
}

export default function appReducer(state, action) {
  return {
    user: userReducer(state, action),
    posts: postReducer(state, action),
  };
}
