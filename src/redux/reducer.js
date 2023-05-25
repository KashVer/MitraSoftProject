import {
  GET_POSTS_SUCCESS,
  GET_COMMENTS_SUCCESS,
  GET_USERS_SUCCESS,
} from "./actions";

export const postsReducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case GET_POSTS_SUCCESS:
      return { ...state, posts: action.posts };
    default:
      return state;
  }
};

export const commentsReducer = (state = { comments: [] }, action) => {
  switch (action.type) {
    case GET_COMMENTS_SUCCESS:
      return { ...state, comments: action.comments };
    default:
      return state;
  }
};

export const usersReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return { ...state, users: action.users };
    default:
      return state;
  }
};
