import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profile";
import FavoritePlaces from "./FavoritePlaces";
import FavoriteProducts from "./FavoriteProducts";

const Dashboard = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return (
    <section className="container">
      <h1 className="large text-primary">Dashboard</h1>
      <p className="lead">Welcome {user && user.name}</p>
      <Link to="/edit-profile" className="btn btn-light">
        Edit Profile
      </Link>
      {profile !== null ? (
        <>
          <FavoritePlaces favoritePlaces={profile.favoritePlaces} />
          <FavoriteProducts favoriteProducts={profile.favoriteProducts} />
        </>
      ) : (
        <>
          <p>You do not have any information, please add some</p>
          <Link to="/create-profile" className="btn btn-primary my-1">
            Create Profile
          </Link>
        </>
      )}
    </section>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
