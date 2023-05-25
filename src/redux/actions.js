export const GET_POSTS_FETCH = "GET_POSTS_FETCH";
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";

export const getPostsFetch = () => ({
  type: GET_POSTS_FETCH,
});

export const GET_COMMENTS_FETCH = "GET_COMMENTS_FETCH";
export const GET_COMMENTS_SUCCESS = "GET_COMMENTS_SUCCESS";

export const getCommentsFetch = (postId) => ({
  type: GET_COMMENTS_FETCH,
  payload: postId,
});

export const GET_USERS_FETCH = "GET_USERS_FETCH";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";

export const getUsersFetch = () => ({
  type: GET_USERS_FETCH,
});
