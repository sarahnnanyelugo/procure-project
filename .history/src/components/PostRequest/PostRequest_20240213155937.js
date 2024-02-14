import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useState, useRef } from "react";
import Audio from "../../assets/images/audio.svg";
import { AudioRecorder } from "react-audio-voice-recorder";

import "./post-request.scss";
function RequestForm(props) {
  const addAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;
    document.body.appendChild(audio);
  };
  var isAdvancedUpload = (function () {
    var div = document.createElement("div");
    return (
      ("draggable" in div || ("ondragstart" in div && "ondrop" in div)) &&
      "FormData" in window &&
      "FileReader" in window
    );
  })();
  const div = document.createElement("div");
  const isDraggable =
    "draggable" in div || ("ondragstart" in div && "ondrop" in div);
  const isAdvancedUpload = (() => {
    const div = document.createElement("div");
    return (
      ("draggable" in div || ("ondragstart" in div && "ondrop" in div)) &&
      "FormData" in window &&
      "FileReader" in window
    );
  })();

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
          <form
            className="flexy"
            method="post box"
            action=""
            enctype="multipart/form-data"
          >
            <div className="col-md-6">
              <h6>Tell us about what you’re looking for</h6>
              <textarea placeholder="Give a brief description of what you’re looking for" />
              <h6>Personalise your request</h6>

              <div className="audio-record">
                {" "}
                <AudioRecorder
                  onRecordingComplete={addAudioElement}
                  audioTrackConstraints={{
                    noiseSuppression: true,
                    echoCancellation: true,
                  }}
                  onNotAllowedOrFound={(err) => console.table(err)}
                  downloadOnSavePress={true}
                  downloadFileExtension="webm"
                  mediaRecorderOptions={{
                    audioBitsPerSecond: 128000,
                  }}
                  showVisualizer={true}
                />
                <audio src={addAudioElement} controls="" />
              </div>
            </div>
            <div className="col-md-6">
              <h6>Drag and drop your request</h6>
              <div class="box__input">
                <input
                  class="box__file"
                  type="file"
                  name="files[]"
                  id="file"
                  data-multiple-caption="{count} files selected"
                  multiple
                />
                <label for="file">
                  <strong>Choose a file</strong>
                  <span class="box__dragndrop"> or drag it here</span>.
                </label>
                <button class="box__button" type="submit">
                  Upload
                </button>
              </div>
              <div class="box__uploading">Uploading…</div>
              <div class="box__success">Done!</div>
              <div class="box__error">
                Error! <span></span>.
              </div>
              <div>
                {isDraggable ? (
                  <p>Draggable feature is supported.</p>
                ) : (
                  <p>Draggable feature is not supported.</p>
                )}
              </div>
              <div>
                {isAdvancedUpload ? (
                  <p>Advanced upload is supported</p>
                ) : (
                  <p>Advanced upload is not supported</p>
                )}
              </div>
            </div>
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
