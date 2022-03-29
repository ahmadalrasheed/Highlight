import React from 'react';
import { Container } from 'react-bootstrap';
import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startRecording, stopRecording } from '../actions/recordingActions';
import StartCapture from '../components/Stream/StartCapture';
import StopCapture from '../components/Stream/StopCapture';

function Stream() {
  const dispatch = useDispatch();
  let webcamRef = useRef(null);
  let mediaRecorderRef = useRef(null);
  const [video, updateVideo] = useState([]);
  const [displayVideo, updateDisplayVideo] = useState(false);
  const videoRecorder = useSelector((state) => state.videoRecorder);
  const { error, isVideoReady, capturing } = videoRecorder;
  const handleDataAvailable = ({ data }) => {
    updateVideo([]);
    updateVideo((video) => video.concat(data));
  };
  const handleStartCaptureClick = () => {
    updateDisplayVideo(false);
    dispatch(startRecording(mediaRecorderRef, webcamRef, handleDataAvailable));
  };
  const handleStopCaptureClick = () => {
    dispatch(stopRecording(mediaRecorderRef));
    updateDisplayVideo(true);
  };
  const convertToBlob = () => {
    const blob = new Blob(video, {
      type: 'video/webm'
    });
    return blob;
  };
  const handleDisplay = () => {
    const blob = convertToBlob();
    const url = URL.createObjectURL(blob);
    const video = document.getElementById('video-replay');
    video.src = url;
  };
  const handleDownload = () => {
    const blob = convertToBlob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    document.body.appendChild(a);
    a.style = 'display: none';
    a.href = url;
    a.download = 'Highlight.webm';
    a.click();
    window.URL.revokeObjectURL(url);
  };
  return (
    <Container>
      <div className="d-flex flex-column text-center my-5">
        {!displayVideo ? (
          <h1 className="welcoming-heading" data-text="back in black">
            Stream
          </h1>
        ) : (
          <h1 className="welcoming-heading" data-text="back in black">
            Video
          </h1>
        )}
        {error ? (
          <div>
            <h2>{error}</h2>
          </div>
        ) : (
          <>
            {!displayVideo ? (
              <StartCapture
                webcamRef={webcamRef}
                capturing={capturing}
                handleStartCaptureClick={handleStartCaptureClick}
                handleStopCaptureClick={handleStopCaptureClick}
              />
            ) : (
              <StopCapture
                updateDisplayVideo={updateDisplayVideo}
                capturing={capturing}
                isVideoReady={isVideoReady}
                webcamRef={webcamRef}
                handleDownload={handleDownload}
                handleDisplay={handleDisplay}
              />
            )}
          </>
        )}
      </div>
    </Container>
  );
}

export default Stream;
