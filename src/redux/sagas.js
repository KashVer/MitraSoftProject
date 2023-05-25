import { takeEvery, put, call, all, delay } from "redux-saga/effects";
import {
  GET_POSTS_FETCH,
  GET_POSTS_SUCCESS,
  GET_COMMENTS_FETCH,
  GET_COMMENTS_SUCCESS,
  GET_USERS_FETCH,
  GET_USERS_SUCCESS,
} from "./actions";
import axios from "axios";

function postsFetch() {
  return axios({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/posts",
  });
}

function commentsFetch() {
  return axios({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/comments",
  });
}

function usersFetch() {
  return axios({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/users",
  });
}

function* workGetPostsFetch() {
  yield delay(500);
  const response = yield call(postsFetch);
  const posts = response.data;
  yield put({ type: GET_POSTS_SUCCESS, posts });
}

function* workGetCommentsFetch() {
  const response = yield call(commentsFetch);
  const comments = response.data;
  yield put({ type: GET_COMMENTS_SUCCESS, comments });
}

function* workGetUsersFetch() {
  const response = yield call(usersFetch);
  const users = response.data;
  yield put({ type: GET_USERS_SUCCESS, users });
}

function* mySaga() {
  yield all([
    takeEvery(GET_POSTS_FETCH, workGetPostsFetch),
    takeEvery(GET_COMMENTS_FETCH, workGetCommentsFetch),
    takeEvery(GET_USERS_FETCH, workGetUsersFetch),
  ]);
}

export default mySaga;
