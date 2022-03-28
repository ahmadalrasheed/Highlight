import React, { useEffect, useState, useCallback, useRef } from "react";
import Webcam from "react-webcam";

function Main() {
  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [capturing, setCapturing] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const [videoDisplay, toggleVideoDisplay] = useState(false);

  const handleStartCaptureClick = () => {
    toggleVideoDisplay(false);
    setRecordedChunks([]);
    setCapturing(true);
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
      mimeType: "video/webm",
    });
    console.log("mediaRecorderRef.current"  ,mediaRecorderRef.current);
    mediaRecorderRef.current.addEventListener(
      "dataavailable",
      handleDataAvailable
    );
    console.log("mediaRecorderRef.current1",mediaRecorderRef.current);
    mediaRecorderRef.current.start();
    console.log("mediaRecorderRef.current2",mediaRecorderRef.current);
    // rest of code
  };

  const handleDataAvailable = ({ data }) => {
    console.log("handleDataAvailable");
    console.log("Data",data);
    if (data.size > 0) {
      setRecordedChunks((prev) => prev.concat(data));
    }
  };

  const handleStopCaptureClick =  () => {
    toggleVideoDisplay(true);
    mediaRecorderRef.current.stop();
    console.log("mediaRecorderRef.current3",mediaRecorderRef.current);

    setCapturing(false);
  };

  const handleDisplay = () => {
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: "video/webm",
      });
      const url = URL.createObjectURL(blob);
      const video = document.getElementById("video-replay");
      video.src = url;
    }
  };
  const handleDownload = () => {
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: "video/webm",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      document.body.appendChild(a);
      a.style = "display: none";
      a.href = url;
      a.download = "Highlight.webm";
      a.click();
      window.URL.revokeObjectURL(url);
    }
  };
  return (
    <div className="d-flex flex-column align-items-center">
      <Webcam
        muted={true}
        audio={true}
        imageSmoothing={true}
        ref={webcamRef}
        height={400}
        width={500}
      />
      {videoDisplay && (
        <video id="video-replay" height="400" width="500" controls></video>
      )}
      {capturing ? (
        <button className="btn btn-danger" onClick={handleStopCaptureClick}>
          Stop Capture
        </button>
      ) : (
        <button className="btn btn-danger" onClick={handleStartCaptureClick}>
          Start Capture
        </button>
      )}
      {recordedChunks.length > 0 && (
        <div>
          <button onClick={handleDisplay}>Display</button>
        </div>
      )}
      {recordedChunks.length > 0 && (
        <div>
          <button onClick={handleDownload}>Download</button>
        </div>
      )}
    </div>
  );
}
export default Main;
