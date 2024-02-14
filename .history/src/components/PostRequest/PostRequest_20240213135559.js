import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useState, useRef } from "react";
import Audio from "../../assets/images/audio.svg";
import { ReactMic } from "react-mic";

import "./post-request.scss";
function RequestForm(props) {
  const [record, setRecord] = useState(false);

  const startRecording = () => {
    setRecord(true);
  };

  const stopRecording = () => {
    setRecord(false);
  };

  const onData = (recordedBlob) => {
    console.log("chunk of real-time data is: ", recordedBlob);
  };

  const onStop = (recordedBlob) => {
    console.log("recordedBlob is: ", recordedBlob);
  };

  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div className="post-request-body">
          {" "}
          <h3>Post a request</h3>
          <p>Get the best deals and exclusive offers with ProCURED.</p>
          <form className="flexy">
            <div className="col-md-6">
              <h6>Tell us about what you’re looking for</h6>
              <textarea placeholder="Give a brief description of what you’re looking for" />
              <h6>Personalise your request</h6>
              <ReactMic
  record={boolean}         // defaults -> false.  Set to true to begin recording
  pause={boolean}          // defaults -> false (available in React-Mic-Gold)
  visualSetting="sinewave" // defaults -> "sinewave".  Other option is "frequencyBars"
  className={string}       // provide css class name
  onStop={function}        // required - called when audio stops recording
  onData={function}        // optional - called when chunk of audio data is available
  onBlock={function}       // optional - called if user selected "block" when prompted to allow microphone access (available in React-Mic-Gold)
  strokeColor={string}     // sinewave or frequency bar color
  backgroundColor={string} // background color
  mimeType="audio/webm"     // defaults -> "audio/webm".  Set to "audio/wav" for WAV or "audio/mp3" for MP3 audio format (available in React-Mic-Gold)
  echoCancellation={boolean} // defaults -> false
  autoGainControl={boolean}  // defaults -> false
  noiseSuppression={boolean} // defaults -> false
  channelCount={number}     // defaults -> 2 (stereo).  Specify 1 for mono.
  bitRate={256000}          // defaults -> 128000 (128kbps).  React-Mic-Gold only.
  sampleRate={96000}        // defaults -> 44100 (44.1 kHz).  It accepts values only in range: 22050 to 96000 (available in React-Mic-Gold)
  timeSlice={3000}          // defaults -> 4000 milliseconds.  The interval at which captured audio is returned to onData callback (available in React-Mic-Gold).
/>
              <button onClick={startRecording} type="button">
                Start
              </button>
              <button onClick={stopRecording} type="button">
                Stop
              </button>
            </div>
            <div className="col-md-6"></div>
          </form>
        </div>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}

function PostRequest() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <img
        src={Audio}
        height="24px"
        width="24px"
        className="input-actions "
        onClick={() => setModalShow(true)}
      />

      <RequestForm show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default PostRequest;
