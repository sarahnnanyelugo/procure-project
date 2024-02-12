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
              Listing bulk inventory is a straightforward process. After logging
              in, go to your supplier dashboard, select “Add New Product,” and
              follow the prompts to input product details, quantities, and
              pricing. You can easily manage and update your inventory through
              the dashboard.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            Is there a support system for suppliers, and how can they get
            assistance?
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Yes, we have a dedicated support team available via email/phone to
              assist suppliers. Additionally, each supplier is assigned a
              dedicated account manager who can provide personalized assistance
              and guidance.
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};
