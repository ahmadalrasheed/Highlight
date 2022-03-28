import React from "react";
import { Container, Row, Col } from "react-bootstrap";
function Footer() {
  return (
    <>
      <footer className="bg-light bg-opacity-50">
        <Container className='aboutme-p-h' >
          <Row>
            <Col className="text-center py-4">
            CopyRight &copy; Highlight
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default Footer;