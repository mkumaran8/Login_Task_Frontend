
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {


  return (
    <div>
      <h1>HOME PAGE</h1>
      <Link to="/login" className="btn btn-primary">Logout</Link>
    </div>
  );
};

export default Home;