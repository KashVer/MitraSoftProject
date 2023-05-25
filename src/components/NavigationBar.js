import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Image from "react-bootstrap/Image";
import avatar from "../img/avatar.jpg";

const NavigationBar = () => {
  return (
    <>
      <Navbar bg="light" expand={false} className="mb-3">
        <Container fluid>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-false`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-false`}
            aria-labelledby={`offcanvasNavbarLabel-expand-false`}
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-false`}>
                Меню
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="d-flex flex-column justify-content-between">
              <Nav>
                <Nav.Link href="/">Список постов</Nav.Link>
                <Nav.Link href="/aboutme">Обо мне</Nav.Link>
              </Nav>
              <div>
                <Image src={avatar} alt="мой аватар" className="img-fluid" />
                <div>Вероника</div>
                <a href={"mailto: veronika.kashkadova55@gmail.com"}>
                  veronika.kashkadova55@gmail.com
                </a>
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
