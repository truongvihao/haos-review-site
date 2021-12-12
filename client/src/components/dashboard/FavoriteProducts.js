import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteFavoriteProduct } from "../../actions/profile";
import { Link } from "react-router-dom";

const FavoriteProducts = ({ favoriteProducts, deleteFavoriteProduct }) => {
  const favProducts = favoriteProducts.map((prod) => (
    <tr key={prod._id}>
      <td>{prod.name}</td>
      <td className="hide-sm">{prod.link}</td>
      <td className="hide-sm">{prod.description}</td>
      <td>
        <button
          onClick={() => deleteFavoriteProduct(prod._id)}
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
        <i class="fas fa-archive"></i> Favorite Products
      </h2>
      <table className="table my-2">
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
      <Link to="/add-favorite-products" className="btn btn-light">
        Add Product
      </Link>
    </Fragment>
  );
};

FavoriteProducts.propTypes = {
  favoriteProducts: PropTypes.array.isRequired,
  deleteFavoriteProduct: PropTypes.func.isRequired,
};

export default connect(null, { deleteFavoriteProduct })(FavoriteProducts);
