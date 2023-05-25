import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersFetch } from "../redux/actions";
import { useParams } from "react-router-dom";

const UserInfo = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.usersReducer.users);
  const posts = useSelector((state) => state.postsReducer.posts);

  const { userId } = useParams();

  const currentUser = useMemo(() => {
    return users.find((user) => user.id === Number(userId));
  }, [users, userId]);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => post.userId === userId);
  }, [posts, userId]);

  useEffect(() => {
    dispatch(getUsersFetch());
  }, []);

  return <div>UserInfo</div>;
};

export default UserInfo;
