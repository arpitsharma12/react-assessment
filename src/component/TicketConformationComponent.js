import React, { useState, useContext } from "react";
import BusContext from "../context/busContext";
import "./TicketConformationComponent.css";

function TicketConformationComponent() {
  const { setTicket, ticket, loggedInUser, travelData, bookedInfo } =
    useContext(BusContext);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [rate, setRate] = useState("");
  const [seat, setSeat] = useState(1);
  console.log(bookedInfo);

  const decrementHandler = () => {
    seat > 1 && setSeat(seat - 1);
  };

  const incrementHandler = () => {
    seat < 6 && setSeat(seat + 1);
  };
  const bookTicketHandler = (e) => {
    e.preventDefault();
    const currentArrayTicket = {
      name,
      age,
      gender,
      phone,
      email,
      seat,
      rate: seat * bookedInfo.amount,
      loggedInUser,
    };
    if (!name || !age || !gender || !phone || !email || !seat || !rate) {
      alert("complete all details");
    } else {

    }
  };
  return (
    <div className="form-box">
      <h6>
        `Bus is from ${bookedInfo.fromWhere} to ${bookedInfo.tohere}`;
        {/* Bus is from {bookedInfo.fromWhere}  to {bookedInfo. tohere} on
        {bookedInfo.date}of{bookedInfo.name}company */}
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
          <option>--select gender--</option>
          <option>Male</option>
          <option>Female</option>
        </select>
      </div>
      <div className="info-box">
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
      </div>
      <div className="tickets-count-box">
        <button onClick={decrementHandler}>-</button>
        <h3>{seat}</h3>
        <button onClick={incrementHandler}>+</button>
      </div>
      <div>
        <button>Back</button>
        <button onChange={bookTicketHandler}>Book ticket</button>
      </div>
    </div>
  );
}

export default TicketConformationComponent;
