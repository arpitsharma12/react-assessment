import React, { useContext, useState } from "react";

import classes from "./Booking.module.css";
import { useNavigate } from "react-router-dom";
import Modal from "./Model";
import BusContext from "../context/busContext";
import { toast } from "react-toastify";


function Booking(props) {
  const navigate = useNavigate();

  const {
    setTicket,
    ticket,
    loggedInUser,
    travelData,
    bookedInfo,
    popUp,
    setPopUP,
    fullDetails,
    setFullDetails,
  } = useContext(BusContext);

  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [rate, setRate] = useState("");
  const [seat, setSeat] = useState(1);

  const decrementHandler = () => {
    seat > 1 && setSeat(seat - 1);
  };

  const incrementHandler = () => {
    seat < 6 && setSeat(seat + 1);
  };

  const bookTicketHandler = (e) => {
    e.preventDefault();

    let loggedInEmail = loggedInUser?.email ;
    let fromLocation = travelData?.fromWhere;
    let toLocation = travelData?.tohere;

    const currentArrayTicket = {
      name,
      age,
      gender,
      phone,
      email,
      seat,
      loggedInEmail,
      rate: seat * bookedInfo?.amount,
      fromLocation,
      toLocation,
    };
    if (!name || !age || !gender || !phone || !email) {
      toast.warn("complete all details");
    } else if (!email.includes("@")) {
      toast.warn("email error");
    } else {
      setTicket((prevState) => {
        return [...prevState, currentArrayTicket];
      });
      localStorage.setItem(
        "busTickets",
        JSON.stringify([...ticket, currentArrayTicket])
      );
       toast.success("ticket booked");
      loggedInEmail = "";
      fromLocation = "";
      toLocation = "";
      setPopUP(false);
      navigate("/TicketsDisplayPage");
    }
  };


  const closeTicketHandler = () => {
    setPopUP(false);
  };

  return (
    <Modal onClose={props.onClose}>
      <h2> Enter your Details </h2>
      <div className={classes.form_container}>
        <div className="form-box">
          <h6>
            Bus is from  {bookedInfo.fromWhere}  to  {bookedInfo.tohere} on
            { "  "+ bookedInfo.date + " "} of {" " + bookedInfo.name } company
          </h6>
          <div className="personal-details">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
            <input
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Age"
            />
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option>select gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div className="info-box">
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="phone"
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
            />
          </div>
          <div className="tickets-count-box">
            <button onClick={decrementHandler}>-</button>
            <h3>{seat}</h3>
            <button onClick={incrementHandler}>+</button>
          </div>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={bookTicketHandler}>Book</button>
        <button onClick={closeTicketHandler}>Close</button>
      </div>
    </Modal>
  );
}

export default Booking;
