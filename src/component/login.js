
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Validation from "./loginValidation";
import axios from "axios";

const Login = () => {

  const [values, setValues] = useState({
    email: "",
    password: "",
  })

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const handleInput = (event) => {
    setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
  }



  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    axios.post("http://localhost:8081/login", values)
      .then(res => {
        if (res.data.Login) {
          navigate("/home");
        } else {
          alert("No Record Found");
        }
      })
      .catch(err => console.log(err));

  }


  return (
    <div className="d-flex justify-content-center align-items-center bg-dark vh-100 ">
      <div className="bg-secondary p-3 rounded w-25">
        <h3>LOGIN PAGE</h3>
        <form action="" onSubmit={handleSubmit} >
          <div className="mb-3">
            <label htmlFor="email"><strong>Username</strong></label>
            <input onChange={handleInput} name="email" type="email" placeholder="Enter Email" className="form-control" required />
            {errors.email && <span text="text-danger">{errors.email}</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="password"><strong>Password</strong></label>
            <input onChange={handleInput} name="password" type="password" placeholder="Enter Password" className="form-control" required />
            {errors.password && <span text="text-danger">{errors.password}</span>}

          </div>
          <button type="submit" className="btn btn-info w-100 rounded-pill">Login</button>
          <br />
          <br />
          <Link to="/signup" className="btn btn-default border w-100 bg-light rounded-pill">SignUp</Link>
        </form>

      </div>

    </div>
  );
};

export default Login;