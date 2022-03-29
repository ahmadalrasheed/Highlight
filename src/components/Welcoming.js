import React from 'react';
import { Row, Col, Container, Image, Button } from 'react-bootstrap';

function Welcoming({ updateStartStream }) {
  return (
    <Container className="py-5">
      <Row className="text-center">
        <h1 className="welcoming-heading" data-text="back in black">
          Welcome to Highlight !
        </h1>
      </Row>
      <Row>
        <Col lg={6}>
          <Image src="./images/homepic.png" fluid height={'500px'} />
        </Col>
        <Col
          lg={6}
          className="align-self-end text-center bg-light  bg-opacity py-5  mt-2"
          style={{ border: 'inset' }}>
          <h2>
            <strong> Looking forward to be Highlighted?</strong>
          </h2>
          <h4>
            <strong>Awesome,You are in the right place!</strong>
          </h4>
        </Col>
      </Row>
      <Row className="bg-secondary  bg-opacity-50  p-5">
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
        <Button variant="light opacity-75 w-25 m-auto my-1" onClick={() => updateStartStream(true)}>
          Start
        </Button>
      </Row>
    </Container>
  );
}

export default Welcoming;
