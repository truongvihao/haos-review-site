import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPost } from "../../actions/post";

const PostForm = ({ addPost }) => {
  const [formData, setFormData] = useState({
    title: "",
    overall: "",
    link: "",
    address: "",
    text: "",
  });

  const { title, overall, link, address, text } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="post-form">
      <div className="p">
        <h3>Start a new review</h3>
      </div>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(formData);
          addPost(formData);
        }}
      >
        <div className="form-group">
          <input
            type="text"
            placeholder="* Title"
            name="title"
            value={title}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Overall"
            name="overall"
            value={overall}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Link"
            name="link"
            value={link}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Address"
            name="address"
            value={address}
            onChange={onChange}
            required
          />
        </div>
        <textarea
          name="text"
          cols="30"
          rows="5"
          placeholder="Create a post"
          value={text}
          onChange={onChange}
          required
        />
        <input type="submit" className="btn btn-dark my-1" value="Submit" />
      </form>
    </div>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default connect(null, { addPost })(PostForm);
