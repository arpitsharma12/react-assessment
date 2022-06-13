import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { GoPrimitiveDot } from "react-icons/go";
import { HiOutlineDotsVertical } from "react-icons/hi";
import "./BusBox.css";
import { routeData, existingBuses } from "../RouteData";
import BusContext from "../context/busContext";
import { useNavigate } from "react-router-dom";
import PopUp from "./popUp";
import Booking from "./Booking";

function BusBox() {
  const navigate = useNavigate();
  const { travelData, setBookedInfo,  popUp, setPopUP } = useContext(BusContext);
  const closePopUpHandler = () => {};
  console.log(travelData);
  const busesForTravel = routeData(travelData, existingBuses);
  console.log({ busesForTravel });
  const bookHandler = (id) => {
    setPopUP(true)
    const sample = busesForTravel?.find((obj) => {
      return obj.id === id;
    });

    setBookedInfo(sample);
 
  };



  return (
    <>
      <div className="box_main_container">
        {busesForTravel?.map((data) => (
          <>
            {/* <div className="bus-details-box">
             */}
            <div className="sub_container">
              <div className="travel-details-box">
                <div className="travel-logo-box">
                  <GoPrimitiveDot className="travel-logo" />
                  <HiOutlineDotsVertical className="travel-logo" />
                  <GoPrimitiveDot className="travel-logo" />
                </div>
                <div className="from-to-details-box">
                  <h6>{data?.fromWhere}</h6>
                  <h6>{data?.time}</h6>
                  <h6>{data?.tohere}</h6>
                </div>
              </div>

              <div className="bus-company-details ">
                <h4 className="bus-company-name">{data.name}</h4>
                <h6>{data?.model}</h6>
              </div>
              <div className="bus-pricing-box">
                <h3>&#8377;{data?.amount}</h3>
              </div>
              <div className="bus-seats-availability-box">
                <h5>{data?.seats}Seats Left</h5>
              </div>

              <div className="bus-booking-box">
                <Button
                  type="button"
                  style={{ verticalAlign: "middle" }}
                  className="btn btn-danger btn-sm"
                  onClick={() => bookHandler(data.id)}
                >
                  <span> Book Now </span>
                </Button>
              </div>
              {popUp && <Booking />}
            </div>

            {/* </div> */}
          </>
        ))}
      </div>
    </>
  );
}

export default BusBox;
