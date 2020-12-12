import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div className="text-right ml-auto">
        <Link to="/create-invoice" className="btn-primary btn">
          Create Invoice
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
