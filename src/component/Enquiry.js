import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBus, faCalendar, faPerson } from "@fortawesome/free-solid-svg-icons";
import "./Enquiry.css";
import { useState, useContext } from "react";
import { Prev } from "react-bootstrap/esm/PageItem";
import BusContext from "../context/busContext";
import {useNavigate}  from 'react-router-dom'
import { toast } from "react-toastify";


function Enquiry() {
  const { setTravelData, travelData } = useContext(BusContext);
 const navigate =useNavigate()

  const [busSearch, setBusSearch] = useState({
    fromWhere: "",
    tohere: "",
    date: "",
  });



  const fromWhereHandler = (e) => {
    setBusSearch(prevState => {
      return {...prevState, fromWhere: e.target.value}
    })
  };
  const tohereHandler = (e) => {
    setBusSearch(prevState => {
      return {...prevState, tohere: e.target.value}
    })
  };
  const dateChangeHAndler = (e) => {
    setBusSearch(prevState => {
      return {...prevState, date: e.target.value}
    })
  };

  const searchHandler = (event) => {
    event.preventDefault();
    const { fromWhere, tohere, date } = busSearch;

    console.log({busSearch})

    if (!fromWhere || !tohere || !date) {
      toast.info("complete the form");
    } else {
      setTravelData(busSearch);
      console.log(travelData);
      navigate('/busBox')
    }
    
  };

  return (
    <div className="boundary">
      <div className="headerSearch">
        <div className="headerSearchItem">
          <FontAwesomeIcon icon={faBus} className="headerIcon" />
          <select className="selectbtn" value={busSearch.fromWhere} onChange={fromWhereHandler}>
            <option>--From--</option>
            <option>Hyderabad</option>
            <option> Chennai</option>
            <option>Banglore</option>
            <option>Indore</option>
            <option>Mumbai</option>
            <option>Pune</option>
          </select>
        </div>
        <div className="headerSearchItem">
          <FontAwesomeIcon icon={faBus} className="headerIcon" />
          <select className="selectbtn" value={busSearch.tohere} onChange={tohereHandler}>
          <option>--To--</option>
            <option >Hyderabad</option>
            <option> Chennai</option>
            <option>Banglore</option>
            <option>Indore</option>
            <option>Mumbai</option>
            <option>Pune</option>
          </select>
        </div>
        <div className="headerSearchItem">
          {/* <FontAwesomeIcon icon={faCalendar} className="headerIcon" /> */}
          {/* <span className="headerSearchText">Date</span> */}
          <input
          value={busSearch.date}
            type="date"
            onChange={dateChangeHAndler}
            className="headerSearchInput"
            id="date"
          />
        </div>

        {/* <div className="headerSearchItem">
          <FontAwesomeIcon icon={faPerson} className="headerIcon" />
          <span
            onClick={() => setOpenOption(!openOption)}
            className="headerSearchText"
          >{`${options.adult} adult ${options.children} children`}</span>

          {openOption && (
            <div className="options">
              <div className="optionItems">
                <span className="optionText">Adult</span>
                <div className="optionCounter">
                  <button
                    disabled={options.adult <= 1}
                    className="optionCounterBtn"
                    onClick={() => handleOption("adult", "d")}
                  >
                    -
                  </button>
                  <span className="optionCounterNumber">{options.adult}</span>
                  <button
                    className="optionCounterBtn"
                    onClick={() => handleOption("adult", "i")}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="optionItems">
                <span className="optionText">Children</span>
                <div className="optionCounter">
                  <button
                    disabled={options.children <= 0}
                    className="optionCounterBtn"
                    onClick={() => handleOption("children", "d")}
                  >
                    -
                  </button>
                  <span className="optionCounterNumber">
                    {options.children}
                  </span>
                  <button
                    className="optionCounterBtn"
                    onClick={() => handleOption("children", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          )}
        </div> */}

        <div className="headerSearchItem">
          <button className="headerbtn" onClick={searchHandler}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default Enquiry;
