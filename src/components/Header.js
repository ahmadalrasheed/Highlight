import React from 'react';
import { Container, Navbar, Nav, Image } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
// import { Link } from 'react-router-dom';
function Header() {
  return (
    <>
      <header>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand>
                <Image src="./images/logo.png" fluid height={'50px'} width={'100px'} />
              </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="px-5">
              <Nav className="me-auto">
                <LinkContainer to="/">
                  <Nav.Link>
                    Home <i className="fa-solid fa-house-user"></i>
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/about">
                  <Nav.Link>
                    About <i className="fa-solid fa-circle-question"></i>
                  </Nav.Link>
                </LinkContainer>
              </Nav>
              <Nav>
                <Nav.Link href="https://github.com/ahmadalrasheed" target="_blank">
                  GitHub <i className="fa-brands fa-github"></i>
                </Nav.Link>
                <Nav.Link href="https://www.linkedin.com/in/ahmad-alrasheed/" target="_blank">
                  LinkedIn <i className="fa-brands fa-linkedin"></i>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
}

export default Header;
