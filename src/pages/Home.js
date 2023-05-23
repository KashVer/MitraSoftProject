import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostsFetch } from "../redux/actions";

const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postsReducer.posts);

  useEffect(() => {
    dispatch(getPostsFetch());
  }, []);

  return (
    <>
      <div>
        Posts:
        {posts.map((post) => {
          return <div>{post.id}</div>;
        })}
      </div>
    </>
  );
};

export default Home;
