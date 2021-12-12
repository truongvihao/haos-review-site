import React from "react";
import PropTypes from "prop-types";

const ProfileFavoritePlaces = ({ place: { name, address, description } }) => (
  <div>
    <h3 className="text-dark">{name}</h3>
    <p>
      <strong>Address: </strong> {address}
    </p>
    <p>
      <strong>Description: </strong> {description}
    </p>
  </div>
);

ProfileFavoritePlaces.propTypes = {
  place: PropTypes.object.isRequired,
};

export default ProfileFavoritePlaces;
