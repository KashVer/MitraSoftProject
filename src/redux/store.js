import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import { postsReducer, commentsReducer, usersReducer } from "./reducer";
import mySaga from "./sagas";

const reducer = combineReducers({
  postsReducer,
  commentsReducer,
  usersReducer,
});

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(mySaga);
