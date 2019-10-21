import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { WashingMachine } from "./components/WashingMachine";
import { Navbar } from "./components/Navbar";
import Reservations from "./Data/Reservations";

function App() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const list = Reservations.getReservations();
    setReservations(list);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div
        className="col-sm-10 mx-5 my-3  "
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap"
        }}
      >
        {[...Array(12)].map((e, i) => (
          <WashingMachine id={i + 1} name={`Vaskemaskin ${i + 1}`} />
        ))}
      </div>
    </div>
  );
}

export default App;
