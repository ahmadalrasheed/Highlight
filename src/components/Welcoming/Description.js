import React from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function Description() {
  return (
    <Container>
      <Row className="bg-secondary  bg-opacity-50  my-3 p-5">
        <Col lg={6} className="align-self-center">
          <h2 className="welcoming-heading text-center aboutme-p-h">OverView</h2>
        </Col>
        <Col lg={6}>
          <p className="aboutme-p-h font-5">
            Highlight is a website to give the users an easy way to record them themselves if they
            are trying to practice for any meetup or presentation, Highlight asks the user for the
            permission to acces their camera and microphone, then the user will be able to start
            with his speech and will be capable of downloading his speech as a recorded video, in
            addition, the user will see his video ready to be played on the website.
          </p>
        </Col>
      </Row>
      <Row className="bg-dark color-dark p-5">
        <h2 className="welcoming-heading text-center aboutme-p-h">Lets Get started!</h2>
        <LinkContainer to="/stream">
          <Button variant="light opacity-75 w-25 m-auto my-1">Start</Button>
        </LinkContainer>
      </Row>
    </Container>
  );
}

export default Description;
