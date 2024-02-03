
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Validation from "./signupValidation";
import axios from "axios";

const SignUp = () => {

  const [values, setValues] = useState({
    name: "",
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

    axios.post("http://localhost:8081/signup", values)
      .then(res => {
        console.log(res);
        navigate("/home")
      })
      .catch(err => console.log(err));

  }

  return (
    <div className="d-flex justify-content-center align-items-center bg-dark vh-100 ">
      <div className="bg-secondary p-3 rounded w-25">
        <h3>SIGNUP PAGE</h3>
        <form action="" onSubmit={handleSubmit} >
          <div className="mb-3">
            <label htmlFor="text"><strong>Name</strong></label>
            <input onChange={handleInput} name="name" type="text" placeholder="Enter Name" className="form-control " />
            {errors.name && <span text="text-danger">{errors.name}</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="email"><strong>Username</strong></label>
            <input onChange={handleInput} name="email" type="email" placeholder="Enter Email" className="form-control " />
            {errors.email && <span text="text-danger">{errors.email}</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="password"><strong>Password</strong></label>
            <input onChange={handleInput} name="password" type="password" placeholder="Enter Password" className="form-control " />
            {errors.password && <span text="text-danger">{errors.password}</span>}
          </div>
          <button onSubmit={handleSubmit} type="submit" className="btn btn-info w-100 rounded-pill">SignUp</button>
          <br />
          <br />
          <Link to="/login" className="btn btn-default border w-100 bg-light text-decoration-none rounded-pill">Login</Link>
        </form>

      </div>

    </div>
  );
};

export default SignUp;