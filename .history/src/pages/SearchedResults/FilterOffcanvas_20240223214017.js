import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Icon from "../../assets/images/filter.svg";
function FilterOffcanvas() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="filter-offcanvas">
        {" "}
        <button onClick={handleShow} className="filter-trigger">
          <img src={Icon} height="20px" width="20px" />
          Filter
        </button>
        <Offcanvas
          show={show}
          onHide={handleClose}
          placement="end"
          style={{ height: "100%", width: "25%" }}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
}

export default FilterOffcanvas;
