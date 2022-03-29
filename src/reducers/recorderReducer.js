import { START_RECORDING, STOP_RECORDING, RECORDING_FAIL } from '../constants/recorderConstants';
export const recorder = (capturing = false, action) => {
  switch (action.type) {
    case START_RECORDING:
      return { isVideoReady: false, capturing: true };
    case STOP_RECORDING:
      return { isVideoReady: true };
    case RECORDING_FAIL:
      return { isVideoReady: false, error: action.error, capturing: false };
    default:
      return capturing;
  }
};
