import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addFavoriteProduct } from "../../actions/profile";

const AddFavoriteProduct = ({ addFavoriteProduct }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    link: "",
    description: "",
  });

  const { name, link, description } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <section className="container">
      <h1 className="large text-primary">Add Product</h1>
      <p className="lead">Share products you love with others!</p>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          addFavoriteProduct(formData, navigate);
        }}
      >
        <div className="form-group">
          <input
            type="text"
            placeholder="* Name of The Product"
            name="name"
            value={name}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Link to The product"
            name="link"
            value={link}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <textarea
            name="description"
            cols="30"
            rows="5"
            placeholder="Product Description"
            value={description}
            onChange={onChange}
          />
        </div>
        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to="/dashboard">
          Go Back
        </Link>
      </form>
    </section>
  );
};

AddFavoriteProduct.propTypes = {
  addFavoriteProduct: PropTypes.func.isRequired,
};

export default connect(null, { addFavoriteProduct })(AddFavoriteProduct);
