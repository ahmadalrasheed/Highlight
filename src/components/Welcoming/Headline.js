import React from 'react';
import { Row, Col, Container, Image } from 'react-bootstrap';

function Headline() {
  return (
    <Container>
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
          className="align-self-center text-center bg-light  bg-opacity py-5  mt-2"
          style={{ border: 'outset' }}>
          <h2>
            <strong> Looking forward to be Highlighted?</strong>
          </h2>
          <h4>
            <strong>Awesome,You are in the right place!</strong>
          </h4>
        </Col>
      </Row>
    </Container>
  );
}

export default Headline;
