import React from 'react'
import { Row, Col, Container, Image, Button, Nav } from "react-bootstrap";

function GithubCode() {
  return (
    <>
    <Row className="my-5 py-3 text-center bg-dark justify-content-center">
        <Col md={4} className="align-self-center">
          <h1>Wanna see Code?</h1>
        </Col>
        <Col md={7}>
          <Row>
            <Container>
              <Image
                src="./images/github.png"
                alt="github"
                fluid
                height={"200px"}
                width="200px"
              />
            </Container>
          </Row>
          <Row>
            <Nav.Link
              href="https://github.com/ahmadalrasheed/Highlight"
              target="_blank"
            >
              <Button variant="light opacity-75 w-25 m-auto my-1">
                Click Me
              </Button>
            </Nav.Link>
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default GithubCode