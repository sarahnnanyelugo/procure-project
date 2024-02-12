import React from "react";

import "./apply.scss";
import Accordion from "react-bootstrap/Accordion";

export const FAQMain = () => {
  return (
    <div className=" col-md-12 mt questions-container">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>How can i get started</Accordion.Header>
          <Accordion.Body>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              erat tellus, dignissim non libero non, rutrum finibus nisl. Nullam
              ultricies ante in dolor venenatis fringilla. Morbi quis enim
              dictum risus commodo aliquet. Donec a mi quis felis fringilla.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            How can I create an account on Bento Delivaz App
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
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            How do I address issues with my order or delivery?
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
