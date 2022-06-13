import React, { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BusContext from "../context/busContext";
import { ToastContainer, toast } from 'react-toastify';


const SignUp = ({state}) => {
  const { setUsers, users } = useContext(BusContext);
  const loginNavi = useNavigate();

  const[inpval, setInpval] = useState({
    username: "" ,
    email: "" ,
    date: "",
    password: "",
  })

  const[data, setData] = useState([]);

  const getData = (e) => {
const {value,name} = e.target

setInpval(()=>{
  return{
    ...inpval,[name]:value
  }
})

  }

  const addData = (e) => {
    e.preventDefault()
    const {username, date, email, password} = inpval
    if (!username || !date || !email || !password ) {
        return toast.warn("Fill Form Properly")
    } else{
      const newUser = {
        Name: username,
        email: email,
        password: password,
        date: date
      };

      setUsers((preState) => {
        return [...preState, newUser];
      });

      localStorage.setItem("UsersData", JSON.stringify([...users, newUser]));
      toast.success(" User Registered Successfully ")
      setTimeout(() => {
        loginNavi("/login");
      }, 1000);
    }
    
  }
  console.log({users})
  return (
    <>
      <section className="showcase login">
        <div className="overlay">
          <form className="form">
            <input
              type="text"
              id="username"
              name="username"
              onChange= {getData}
              placeholder="User Name"
              required
            />

            <input
              type="date"
              name="date"
              id="date"
              onChange= {getData}
            />

            <input
              type="email"
              name="email"
              id="email"
              onChange= {getData}
              placeholder="Enter Email Address Required"
            />
            <input
              type="password"
              name="password"
              id="password"
              onChange= {getData}
              placeholder="Enter Password"
              required
            />

            <input
              type="password"
              name="password2"
              id="password2"
              onChange= {getData}
              placeholder="Confirm Password"
              required
            />

            <button type="submit" onClick={addData}>Create New Account</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default SignUp;
