import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

function StopCapture({ handleDownload, handleDisplay, updateDisplayVideo, isVideoReady }) {
  return (
    <Row className="bg-secondary  bg-opacity-50  my-3 py-3 text-center">
      <Col lg={8}>{isVideoReady && <video id="video-replay" controls></video>}</Col>
      <Col lg={4} className="align-self-center text-center pt-3">
        {isVideoReady && (
          <div>
            <Button variant="light opacity-75 w-75 m-auto my-1" onClick={handleDisplay}>
              Display
            </Button>
          </div>
        )}
        {isVideoReady && (
          <div>
            <Button variant="light opacity-75 w-75 m-auto my-1" onClick={handleDownload}>
              Download
            </Button>
          </div>
        )}

        <Button
          variant="dark opacity-50 w-75 m-auto my-1"
          onClick={() => updateDisplayVideo(false)}>
          Back To Stream
        </Button>
      </Col>
    </Row>
  );
}

export default StopCapture;
