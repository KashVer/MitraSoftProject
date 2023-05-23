import { GET_POSTS_SUCCESS } from "./actions";

const postsReducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case GET_POSTS_SUCCESS:
      return { ...state, posts: action.posts };
    default:
      return state;
  }
};

export default postsReducer;