import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";
import ProfileAbout from "./ProfileAbout";
import ProfileFavoritePlaces from "./ProfileFavoritePlaces";
import ProfileFavoriteProducts from "./ProfileFavoriteProducts";
import { getProfileById } from "../../actions/profile";

const Profile = ({ getProfileById, profile: { profile }, auth }) => {
  const { id } = useParams();
  useEffect(() => {
    getProfileById(id);
  }, [getProfileById, id]);

  return (
    <section className="container">
      {profile === null ? (
        <></>
      ) : (
        <Fragment>
          {auth.isAuthenticated &&
            auth.loading === false &&
            auth.user._id === profile.user._id && (
              <Link to="/edit-profile" className="btn btn-dark">
                Edit Profile
              </Link>
            )}
          <div className="profile-grid my-1">
            <ProfileAbout profile={profile} />
            <div className="bg-white p-2">
              <h2 className="text-primary">Favorite Places</h2>
              {profile.favoritePlaces.length > 0 ? (
                <Fragment>
                  {profile.favoritePlaces.map((place) => (
                    <ProfileFavoritePlaces key={place._id} place={place} />
                  ))}
                </Fragment>
              ) : (
                <h4>Empty</h4>
              )}
            </div>

            <div className="bg-white p-2">
              <h2 className="text-primary">Favorite Products</h2>
              {profile.favoriteProducts.length > 0 ? (
                <Fragment>
                  {profile.favoriteProducts.map((prod) => (
                    <ProfileFavoriteProducts key={prod._id} prod={prod} />
                  ))}
                </Fragment>
              ) : (
                <h4>Empty</h4>
              )}
            </div>
          </div>
        </Fragment>
      )}
    </section>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getProfileById })(Profile);
