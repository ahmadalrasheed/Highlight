import {
  START_RECORDING,
  STOP_RECORDING,
  RECORDING_FAIL,
} from "../constants/recorderConstants";


export const startRecording =
  (mediaRecorderRef, webcamRef , handleDataAvailable) => async (dispatch) => {
    try {
      mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
        mimeType: "video/webm",
      });
      mediaRecorderRef.current.addEventListener(
        "dataavailable",
        handleDataAvailable
      );
      mediaRecorderRef.current.start();
      dispatch({
        type: START_RECORDING,
      });
    } catch (error) {
      dispatch({
        type: RECORDING_FAIL,
        error: error.message,
      });
    }
  };

export const stopRecording = (mediaRecorderRef) => async (dispatch) => {
  try {
    mediaRecorderRef.current.stop();
    dispatch({
      type: STOP_RECORDING,
    });


  } catch (error) {
    dispatch({
      type: RECORDING_FAIL,
      error: error.message,
    });
  }
};

