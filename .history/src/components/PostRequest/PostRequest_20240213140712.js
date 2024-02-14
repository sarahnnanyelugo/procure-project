import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useState, useRef } from "react";
import Audio from "../../assets/images/audio.svg";
import { AudioRecorder } from "react-audio-voice-recorder";

import "./post-request.scss";
function RequestForm(props) {
  const [isRecording, setIsRecording] = useState(false);
  const [blobURL, setBlobURL] = useState("");

  const handleStart = () => {
    setIsRecording(true);
  };

  const handleStop = (blobObject) => {
    setIsRecording(false);
    setBlobURL(blobObject.blobURL);
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

              <div>
                <ReactMicRecorder
                  record={isRecording}
                  onStop={handleStop}
                  onStart={handleStart}
                  mimeType="audio/mp3"
                />
                <button onClick={() => setIsRecording(!isRecording)}>
                  {isRecording ? "Stop Recording" : "Start Recording"}
                </button>
                {blobURL && (
                  <audio controls>
                    <source src={blobURL} type="audio/mp3" />
                    Your browser does not support the audio element.
                  </audio>
                )}
              </div>
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
