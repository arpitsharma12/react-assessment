




import React, { useContext } from "react";
import "./ticketsDisplayPage.css"
import BusContext from "../context/busContext";

import { BsArrowRight } from "react-icons/bs";
function TicketsDisplayPage() {
    const { loggedInUser, ticket, travelData } = useContext(BusContext);
console.log({travelData});
  let ticketsArray = [];
  console.log(ticket);
  if (ticket.length !== 0) {
    ticket?.forEach((element) => {
      if (element.loggedInEmail === loggedInUser.email) {
      
        ticketsArray.push(element);
      }
    });
  }
  console.log({ticket});
  console.log(ticketsArray);

    return (
        <div className="ticketsDisplayPage-box">
        {ticketsArray?.map((data) => (
          <div key={data?.id} className="tickets">
            <div className="travel-box">
              <h5>{data?.fromLocation}</h5>
              <div>
                <BsArrowRight />
                <BsArrowRight />
                <BsArrowRight />
                <BsArrowRight />
              </div>
              <h5>{data?.toLocation}</h5>
            </div>
            
            <div className="ticket-details">
              <h6>Name:{data?.name}</h6>
              <h6>Gender:{data?.gender}</h6>
              <h6>Age:{data?.age}</h6>
              <h6>Phone:{data?.phone}</h6>
              <h6>Email:{data?.email}</h6>
              
              <h6>Seats:{data?.seat}</h6>
              <h6>Fare:{data?.rate}</h6>
         
            </div>
          </div>
        ))}
      </div>
    )

  }
  
  export default TicketsDisplayPage;
