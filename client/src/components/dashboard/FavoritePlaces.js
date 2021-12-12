import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteFavoritePlace } from "../../actions/profile";
import { Link } from "react-router-dom";

const FavoritePlaces = ({ favoritePlaces, deleteFavoritePlace }) => {
  const favPlaces = favoritePlaces.map((place) => (
    <tr key={place._id}>
      <td>{place.name}</td>
      <td className="hide-sm">{place.address}</td>
      <td className="hide-sm">{place.description}</td>
      <td>
        <button
          onClick={() => deleteFavoritePlace(place._id)}
          className="btn btn-primary-outline"
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h2 className="my-2">
        <i class="fas fa-map-marked-alt"></i> Favorite Places
      </h2>
      <table className="table my-2">
        <thead>
          <tr>
            <th>Name</th>
            <th className="hide-sm">Address</th>
            <th className="hide-sm">Description</th>
            <th />
          </tr>
        </thead>
        <tbody>{favPlaces}</tbody>
      </table>
      <Link to="/add-favorite-places" className="btn btn-light">
        Add Place
      </Link>
    </Fragment>
  );
};

FavoritePlaces.propTypes = {
  favoritePlaces: PropTypes.array.isRequired,
  deleteFavoritePlace: PropTypes.func.isRequired,
};

export default connect(null, { deleteFavoritePlace })(FavoritePlaces);
