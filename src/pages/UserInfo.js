import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostsFetch, getUsersFetch } from "../redux/actions";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import avatar from "../img/avatar.jpg";

const UserInfo = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postsReducer.posts);
  const users = useSelector((state) => state.usersReducer.users);

  const { userId } = useParams();

  const currentUser = useMemo(() => {
    return users.find((user) => user.id === Number(userId));
  }, [users, userId]);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => post.userId === Number(userId));
  }, [posts, userId]);

  useEffect(() => {
    dispatch(getUsersFetch());
    dispatch(getPostsFetch());
  }, []);

  console.log("filteredposts", filteredPosts);

  if (!currentUser) {
    return (
      <Spinner
        animation="border"
        variant="secondary"
        className="d-flex justify-content-center mt-5"
      />
    );
  }

  return (
    <>
      <Navbar bg="light" expand={false} className="mb-3">
        <Container fluid>
          <Nav>
            <Nav.Link href="/">Назад</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Row className="g-4 mt-2 mb-5">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title className="mb-3">
                Информация о пользователе {currentUser.name}{" "}
                {currentUser.username}
              </Card.Title>
              <Card.Text>
                <ListGroup>
                  <ListGroup.Item className="d-flex justify-content-between">
                    <span>Имейл:</span> <span>{currentUser.email}</span>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-between">
                    <span>Адрес: </span>{" "}
                    <span>{`${currentUser.address.street}, ${currentUser.address.suite}, ${currentUser.address.city}, ${currentUser.address.zipcode}`}</span>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-between">
                    <span>Телефон: </span> <span>{currentUser.phone}</span>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-between">
                    <span>Сайт:</span> <span>{currentUser.website}</span>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-between">
                    <span>Компания:</span>{" "}
                    <span>{currentUser.company.name}</span>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <h1 className="mb-3">Список постов пользователя</h1>
      <Row xs={1} md={4} className="g-4">
        {filteredPosts.map((post, index) => {
          return (
            <Col key={`${post.id}${index}`}>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text>{post.body}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default UserInfo;
