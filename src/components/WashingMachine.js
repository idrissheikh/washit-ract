import React, { useState } from "react";
import { WashModal } from "./WashModal";
import { Button, Modal } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Reservations from "../Data/Reservations";

export const WashingMachine = ({ name, machineId }) => {
  const [show, setShow] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [program, setProgram] = useState("");
  const [time, setTime] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const reservation = { name: "test", age: 22 };

  const onSubmit = () => {
    const reservation = {
      machineId,
      program,
      startDate,
      time
    };
    Reservations.setReservation(reservation);
    Reservations.getReservations();
    setShow(false);
  };

  const isBusy = time => {
    const reservations = Reservations.getReservations();
    const isBusy = reservations.some(reservation => {
      const currentDate = new Date(reservation.startDate).setHours(0, 0, 0, 0);
      return (
        reservation.time === time &&
        currentDate === startDate.setHours(0, 0, 0, 0)
      );
    });
    return isBusy;
  };

  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>

        <a href="#" onClick={() => setShow(true)} className="card-link">
          Velg
        </a>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <select
            class="custom-select"
            onChange={e => setProgram(e.target.value)}
          >
            <option selected>Velg Program</option>
            <option value="1">Kokvask: 60 grader, 90 minutter</option>
            <option value="2">Tøyvask: 40 grader, 60 minutter</option>
            <option value="3">Håndvask: 30 grader, 20 minutter</option>
          </select>
          Velg Dato:{" "}
          <DatePicker
            selected={startDate}
            onChange={newDate => setStartDate(newDate)}
          />{" "}
          <select class="custom-select" onChange={e => setTime(e.target.value)}>
            <option selected>Velg Tid</option>
            <option disabled={isBusy("09-10")} value="09-10">
              09-10
            </option>
            <option disabled={isBusy("10-11")} value="10-11">
              10-11
            </option>
            <option disabled={isBusy("11-12")} value="11-12">
              11-12
            </option>
            <option disabled={isBusy("12-13")} value="12-13">
              12-13
            </option>
            <option disabled={isBusy("13-14")} value="13-14">
              13-14
            </option>
          </select>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Avbryt
          </Button>
          <Button onClick={onSubmit} variant="primary">
            Reserver
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
