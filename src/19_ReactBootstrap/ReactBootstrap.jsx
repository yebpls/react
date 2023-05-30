import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function ReactBootstrap() {
  const [show, setShow] = useState(false);
  const handleOpen = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div>
      <h1>ReactBootstrap</h1>

      <Button variant="primary">Primary</Button>
      <Button variant="outline-success">Outline Success</Button>
      <hr />

      <Button onClick={handleOpen}>Show Modal</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>Example</Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ReactBootstrap;
