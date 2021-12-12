import React from "react";
import PropTypes from "prop-types";

const ProfileAbout = ({
  profile: {
    location,
    bio,
    user: { name, avatar },
  },
}) => {
  return (
    <div className="profile-about p-2">
      <img className="round-img my-1" src={avatar} alt="" />
      <h1 className="large">{name}</h1>
      <p>{location ? <span>{location}</span> : null}</p>
      <p>{bio ? <span>{bio}</span> : null}</p>
    </div>
  );
};

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileAbout;
