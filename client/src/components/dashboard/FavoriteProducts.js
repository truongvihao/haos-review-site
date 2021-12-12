import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteFavoriteProduct } from "../../actions/profile";

const FavoriteProducts = ({ favoriteProducts, deleteFavoriteProduct }) => {
  const favProducts = favoriteProducts.map((prod) => (
    <tr key={prod._id}>
      <td>{prod.name}</td>
      <td className="hide-sm">{prod.link}</td>
      <td className="hide-sm">{prod.description}</td>
      <td>
        <button
          onClick={() => deleteFavoriteProduct(prod._id)}
          className="btn btn-danger"
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h2 className="my-2">Favorite Products</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th className="hide-sm">Link</th>
            <th className="hide-sm">Description</th>
            <th />
          </tr>
        </thead>
        <tbody>{favProducts}</tbody>
      </table>
    </Fragment>
  );
};

FavoriteProducts.propTypes = {
  favoriteProducts: PropTypes.array.isRequired,
  deleteFavoriteProduct: PropTypes.func.isRequired,
};

export default connect(null, { deleteFavoriteProduct })(FavoriteProducts);
