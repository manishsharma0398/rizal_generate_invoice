import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <Link to="/login" className="btn btn-primary btn-lg">
        Login
      </Link>

      <Link to="/register" className="btn btn-danger btn-lg">
        Signup
      </Link>
    </div>
  );
};

export default LandingPage;
