import React, { useState, useRef } from 'react';
import Webcam from 'react-webcam';
import { useDispatch, useSelector } from 'react-redux';
import { startRecording, stopRecording } from '../actions/recordingActions';

function Main() {
  const dispatch = useDispatch();
  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [video, updateVideo] = useState([]);
  const videoRecorder = useSelector((state) => state.videoRecorder);
  const { error, isVideoReady, capturing } = videoRecorder;

  const handleDataAvailable = ({ data }) => {
    updateVideo([]);
    updateVideo((video) => video.concat(data));
  };
  const handleStartCaptureClick = () => {
    dispatch(startRecording(mediaRecorderRef, webcamRef, handleDataAvailable));
  };
  const handleStopCaptureClick = () => {
    dispatch(stopRecording(mediaRecorderRef));
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
    <div className="d-flex flex-column align-items-center">
      {error ? (
        <div>
          <h2>{error}</h2>
        </div>
      ) : (
        <>
          <Webcam muted={true} audio={true} ref={webcamRef} height={400} width={500} />
          {isVideoReady && <video id="video-replay" height="400" width="500" controls></video>}
          {capturing ? (
            <button className="btn btn-danger" onClick={handleStopCaptureClick}>
              Stop Capture
            </button>
          ) : (
            <button className="btn btn-danger" onClick={handleStartCaptureClick}>
              Start Capture
            </button>
          )}
          {isVideoReady && (
            <div>
              <button onClick={handleDisplay}>Display</button>
            </div>
          )}
          {isVideoReady && (
            <div>
              <button onClick={handleDownload}>Download</button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
export default Main;
