import React, { useEffect, useState } from "react";
import BusContext from "./busContext";

function BusState(props) {
  const [users, setUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState([]);
  const [travelData, setTravelData] = useState([]);
  const [ticket, setTicket] = useState([]);
  const [popUp, setPopUP] = useState(false);
  const [fullDetails, setFullDetails] = [];

  const [bookedInfo, setBookedInfo] = useState({});
  let userData = JSON.parse(localStorage.getItem("UsersData"));
  let userLogged = JSON.parse(localStorage.getItem("loggedIn"));
  let getTicket = JSON.parse(localStorage.getItem("busTickets"));

  useEffect(() => {
    if (userData === null) {
      setUsers([]);
    } else {
      setUsers(userData);
    }

    if (userLogged === null) {
      setLoggedInUser(undefined);
    } else {
      setLoggedInUser(userLogged);
    }

    if (getTicket === null) {
      setTicket([]);
    } else {
      setTicket(getTicket);
    }
  }, []);

  return (
    <BusContext.Provider
      value={{
        users,
        setUsers,
        setLoggedInUser,
        loggedInUser,
        travelData,
        setTravelData,
        setTicket,
        ticket,
        setBookedInfo,
        bookedInfo,
        popUp,
        setPopUP,
        fullDetails,
        setFullDetails,
      }}
    >
      {props.children}
    </BusContext.Provider>
  );
}

export default BusState;
