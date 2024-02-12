import React from "react";

import "./apply.scss";
import Accordion from "react-bootstrap/Accordion";

export const FAQMain = () => {
  return (
    <div className=" col-md-12 mt questions-container">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>How can I register as a supplier?</Accordion.Header>
          <Accordion.Body>
            <p>
              To register as a supplier, simply click on the “Get started”
              button on the Supplier’s homepage. Follow the prompts to provide
              your business information, upload necessary documents such as
              business licenses, and complete the verification process.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Is there a fee for listing products in bulk?
          </Accordion.Header>
          <Accordion.Body>
            <p>
              There is no upfront fee for listing products in bulk. We operate
              on a commission-based model, where a small percentage is deducted
              from the final transaction amount when your product is sold. Refer
              to our <Link>pricing page</Link> for detailed information.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            What is the process for listing and managing bulk inventory?
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              erat tellus, dignissim non libero non, rutrum finibus nisl. Nullam
              ultricies ante in dolor venenatis fringilla. Morbi quis enim
              dictum risus commodo aliquet. Donec a mi quis felis fringilla.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            How can I track my food or parcel delivery in real-time?
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              erat tellus, dignissim non libero non, rutrum finibus nisl. Nullam
              ultricies ante in dolor venenatis fringilla. Morbi quis enim
              dictum risus commodo aliquet. Donec a mi quis felis fringilla.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            How can i make payments on the Bento Delivaz App
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              erat tellus, dignissim non libero non, rutrum finibus nisl. Nullam
              ultricies ante in dolor venenatis fringilla. Morbi quis enim
              dictum risus commodo aliquet. Donec a mi quis felis fringilla.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>
            How does Bento Delivaz mobile application work?
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              erat tellus, dignissim non libero non, rutrum finibus nisl. Nullam
              ultricies ante in dolor venenatis fringilla. Morbi quis enim
              dictum risus commodo aliquet. Donec a mi quis felis fringilla.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>What areas do you deliver to?</Accordion.Header>
          <Accordion.Body>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              erat tellus, dignissim non libero non, rutrum finibus nisl. Nullam
              ultricies ante in dolor venenatis fringilla. Morbi quis enim
              dictum risus commodo aliquet. Donec a mi quis felis fringilla.
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};
