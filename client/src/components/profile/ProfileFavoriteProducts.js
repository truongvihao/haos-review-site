import React from "react";
import PropTypes from "prop-types";

const ProfileFavoriteProducts = ({ prod: { name, link, description } }) => (
  <div>
    <h3 className="text-dark">{name}</h3>
    <p>
      <strong>Link: </strong> {link}
    </p>
    <p>
      <strong>Description: </strong> {description}
    </p>
  </div>
);

ProfileFavoriteProducts.propTypes = {
  prod: PropTypes.object.isRequired,
};

export default ProfileFavoriteProducts;
