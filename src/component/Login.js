import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import BusContext from "../context/busContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = ({state}) => {
  

  const { users: userData, setLoggedInUser } = useContext(BusContext);
  const navigate = useNavigate();

  const [inpval, setInpval] = useState({
    email: "",
    password: "",
  });
  
  const emailChangeHandler = (e) => {
    setInpval( preState => {
      return {...preState, email: e.target.value}
    })
  }

  const passwordChangeHandler = (e) => {
    setInpval( preState => {
      return {...preState, password: e.target.value}
    })
  }

  const loginSubmitHandler = (e) => {
    e.preventDefault();
    const enteredEmail = inpval.email;
    const enteredPassword = inpval.password;

    const matchEmail = userData.filter((user) => {
      return user.email === enteredEmail;
    });

    const matchPassword = matchEmail.filter((user) => {
      return user.password === enteredPassword;  
    });

    if (matchEmail.length !== 0 && matchPassword.length !== 0) {
      toast.success("Login Success");
      console.log("login successful")
      setTimeout(() => {
        navigate("/Enquiry");
      }, 1000);
      setLoggedInUser({ ...matchEmail[0] });
      localStorage.setItem("loggedIn", JSON.stringify({ ...matchEmail[0] }));
      setInpval("")
    } else {
      toast.error("Invalid Details Entered")
      console.log("login failed")
    }
  }

  return (
    <>
      <section className="showcase login">
        <div className="overlay">
          <form className="form" onSubmit={loginSubmitHandler}>
            <input
              type="email"
              name="email" 
              id="email"
              onChange= {emailChangeHandler}
              value={inpval.email}
              placeholder="Enter Email Address Required"
              required
            />
            <input
              type="password"
              name="password"
              id="password"
              onChange= {passwordChangeHandler}
              placeholder="Enter Password"
              value={inpval.password}
              required
             />  
            <button type="submit"> Log In </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
