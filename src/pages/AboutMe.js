import React from "react";
import Card from "react-bootstrap/Card";

const AboutMe = () => {
  return (
    <Card>
      <Card.Body>
        <Card.Title as="h5">Кратко обо мне</Card.Title>
        <Card.Text>
          Перешла в программирование из сферы иностранных языков.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default AboutMe;
