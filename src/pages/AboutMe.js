import React from "react";
import Card from "react-bootstrap/Card";

const AboutMe = () => {
  return (
    <Card>
      <Card.Body>
        <Card.Title as="h5">Кратко обо мне</Card.Title>
        <Card.Text>
          <div className="mb-2">
            Решила сменить сферу деятельности на разработку, поскольку мне
            всегда было интересно развиваться, изучать новое. Считаю
            программирование отличным способом проявить себя с разных сторон. В
            своей работе я всегда стараюсь встать на место пользователя, чтобы
            лучше понять его потребности. Умею не только предлагать, но и
            реализовывать от начала и до конца свои идеи.
          </div>
          <div>
            Ссылку на мой GitHub вы найдете{" "}
            <a
              href="https://github.com/KashVer?tab=repositories"
              className="link-info link-opacity-50-hover"
            >
              здесь
            </a>
            . Буду рада присоединиться к коллективу ООО "МИТРА СОФТ".
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default AboutMe;
