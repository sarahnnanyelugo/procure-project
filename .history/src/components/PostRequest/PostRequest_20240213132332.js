import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React from "react";
import Audio from "../../assets/images/audio.svg";
import "./post-request.scss";
function RequestForm(props) {
  return (
    <Modal
      {...props}
      size="lg"
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
