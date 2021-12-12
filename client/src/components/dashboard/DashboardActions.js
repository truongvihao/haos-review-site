import React from "react";
import { Link } from "react-router-dom";

const DashboardActions = () => {
  return (
    <div className="dash-buttons">
      <Link to="/edit-profile" className="btn btn-light">
        Edit Profile
      </Link>
      <Link to="/add-favorite-places" className="btn btn-light">
        Add Favorite Place
      </Link>
      <Link to="/add-favorite-products" className="btn btn-light">
        Add Favorite Product
      </Link>
    </div>
  );
};

export default DashboardActions;
