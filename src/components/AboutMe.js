import React from "react";
import { Row, Col, Container, Image, Button, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function AboutMe() {
  return (
    <div>
      <Row>
        <Col lg={4} className="text-center">
          <Container>
            <Image src="./images/me.jpg" alt="My picture" fluid roundedCircle />

            <h4>Ahmad Alrasheed</h4>
            <span>Full-Stack Web Developer </span>
          </Container>
        </Col>
        <Col lg={8}>
          <Row className="bg-primary  bg-opacity-50">
            <Container className="p-5">
              <h2 className="aboutme-p-h">About me</h2>
              <p className="aboutme-p-h">
                I am a fast learner and a keen problem solver, I love to learn
                new things, I am skilled at web development. My goal is to
                deploy unique and creative ideas to software development world
                and to be a part of big future projects. I am very optimistic
                and hopeful to make positive impact into software development
                world.
              </p>
            </Container>
          </Row>
          <Row className="bg-secondary  bg-opacity-50">
            <Container className="p-5">
              <h3 className="aboutme-p-h">What is Highlight ?</h3>
              <p className="aboutme-p-h">
                Highlight is a website to give the users an easy way to record
                them themselves if they are trying to practice for any meetup or
                presentation, Highlight asks the user for the permission to
                acces their camera and microphone, then the user will be able to
                start with his speech and will be capable of downloading his
                speech as a recorded video, in addition, the user will see his
                video ready to be played on the website.{" "}
              </p>
            </Container>
          </Row>
        </Col>
      </Row>
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
     
                  <Nav.Link href="https://github.com/ahmadalrasheed/Highlight" target="_blank">
                  <Button variant="primary w-25 m-auto my-1">Click Me</Button>
                  </Nav.Link>
          </Row>
        </Col>
      </Row>
      {/* <Col md={8}>
            </Col>
            <Col md={4} className="bg-primary  bg-opacity-50">
            <Container className="p-5" >
                        <h2 className='aboutme-p-h'>About me</h2>
                        <p className='aboutme-p-h'>I am a fast learner and a keen problem solver, I love to learn new things, I am skilled at web development. 
My goal is to deploy unique and creative ideas to software development world and to be a part of big future projects. 
I am very optimistic and hopeful to make positive impact into software development world.</p>
                    </Container>
            </Col> */}
    </div>
  );
}

export default AboutMe;
