import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
export const WashModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Velg
      </Button>
    </>
  );
};
