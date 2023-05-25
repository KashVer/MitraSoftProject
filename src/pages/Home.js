import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCommentsFetch, getPostsFetch } from "../redux/actions";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import avatar from "../img/avatar.jpg";

const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postsReducer.posts);
  const comments = useSelector((state) => state.commentsReducer.comments);

  const [activePostId, setActivePostId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getPostsFetch());
    dispatch(getCommentsFetch());
  }, []);

  const filteredComments = useMemo(() => {
    if (activePostId === null) return [];
    return comments.filter((comment) => comment.postId === activePostId);
  }, [activePostId, comments]);

  const toggleComments = (postId) => {
    setActivePostId((prev) => {
      return prev === postId ? null : postId;
    });
  };

  const showUserInfo = (userId) => {
    navigate(`/userinfo/${userId}`);
  };

  return (
    <>
      <Row xs={1} md={4} className="g-4">
        {posts.map((post, index) => {
          return (
            <Col key={`${post.id}${index}`}>
              <Card className="h-100">
                <Card.Img
                  variant="top"
                  src={avatar}
                  onClick={() => showUserInfo(post.userId)}
                />
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text>{post.body}</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => toggleComments(post.id)}
                  >
                    Комментарии
                  </Button>
                  {activePostId === post.id &&
                    filteredComments.map((comment, index) => {
                      return (
                        <div
                          key={`${comment.id}${index}`}
                          className="border border-primary rounded mt-3 mb-3 p-2"
                        >
                          <div>{comment.body}</div>
                          <a
                            href={`mailto:${comment.email}`}
                            className="text-secondary"
                          >
                            {comment.email}
                          </a>
                        </div>
                      );
                    })}
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Home;
