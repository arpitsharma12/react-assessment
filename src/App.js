import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Showcase from "./component/Showcase";
import Destinations from "./component/Destinations";
import Login from "./component/Login";
import SignUp from "./component/SignUp";
import Footer from "./component/Footer";
import Error from "./component/Error";
import Enquiry from "./component/Enquiry";
import { useState } from "react";
import BusBox from "./component/BusBox";
import TicketConformationComponent from "./component/TicketConformationComponent";
import TicketsDisplayPage from "./component/ticketsDisplayPage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  const [state, setstate] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Header  /> 

        <Routes>
          <Route element={<Showcase />} path="/" />
          {/* <Route element={<Destinations/>} path='/' />  */}
          <Route element={<Enquiry />} path="/enquiry" />
          <Route element={<BusBox />} path="/busbox" />
          <Route element={<Login />} path="/login" />
          <Route element={<SignUp state={setstate} />} path="/signup" />
          <Route
            element={<TicketConformationComponent />}
            path="/TicketConformationComponent"
          />
          <Route element={<TicketsDisplayPage />} path="/TicketsDisplayPage" />
          <Route element={<Error />} path="*" />
        </Routes>

        {/* <Footer />  */}

        <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      </BrowserRouter>
      
    </>
  );
}

export default App;
