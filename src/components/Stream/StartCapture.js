import React from 'react';
import Webcam from 'react-webcam';
import { Row, Button } from 'react-bootstrap';
function StartCapture({ capturing, handleStopCaptureClick, handleStartCaptureClick, webcamRef }) {
  return (
    <Row className="justify-self-stretch bg-secondary  bg-opacity-50  my-3 py-5 text-center">
      <Webcam
        className="d-flex m-auto w-100"
        muted={true}
        audio={true}
        ref={webcamRef}
        height={400}
        width={700}
      />
      {capturing ? (
        <Button variant="dark opacity-75 w-25 m-auto my-1" onClick={handleStopCaptureClick}>
          Stop Capture
        </Button>
      ) : (
        <Button variant="dark opacity-75 w-25 m-auto my-1" onClick={handleStartCaptureClick}>
          Start Capture
        </Button>
      )}
    </Row>
  );
}

export default StartCapture;
