import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import BusContext from "../context/busContext";


const Header = () => {
   const {loggedInUser, setLoggedInUser} = useContext(BusContext);
  const navigate = useNavigate()
  const handleLogout =(e) =>{
    e.preventDefault();
    localStorage.removeItem("loggedIn")
    setLoggedInUser(undefined)
    navigate("/")
  }
  return (
    <>
      <header className="header">
        <div>
          <Link className="links" strict exact to="/">Home</Link>
        </div>

        <nav className="navbar">
          <ul>
           {loggedInUser && <Link className="links" strict exact to="/Enquiry">Enquiry</Link>}
           { !loggedInUser && <Link className="links" strict exact to="/login">Login</Link>}
           { !loggedInUser && <Link className="links" strict exact to="/signup">Sign Up</Link>}
           {loggedInUser && <Link onClick={handleLogout} className="links" strict exact to="/">Logout</Link>}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
