import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addFavoritePlace } from "../../actions/profile";

const AddFavoritePlace = ({ addFavoritePlace }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    description: "",
  });

  const { name, address, description } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <section className="container">
      <h1 className="large text-primary">Add Place</h1>
      <p className="lead">
        <i className="fas fa-code-branch" /> Let people knows your favorite
        places!
      </p>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          addFavoritePlace(formData, navigate);
        }}
      >
        <div className="form-group">
          <input
            type="text"
            placeholder="* Place's Name"
            name="name"
            value={name}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Address"
            name="address"
            value={address}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <textarea
            name="description"
            cols="30"
            rows="5"
            placeholder="Place Description"
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

AddFavoritePlace.propTypes = {
  addFavoritePlace: PropTypes.func.isRequired,
};

export default connect(null, { addFavoritePlace })(AddFavoritePlace);
