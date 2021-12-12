const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  location: {
    type: String,
  },
  bio: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  favoritePlaces: [
    {
      name: {
        type: String,
        required: true,
      },
      address: {
        type: String,
      },
      description: {
        type: String,
      },
    },
  ],
  favoriteProducts: [
    {
      name: {
        type: String,
        required: true,
      },
      link: {
        type: String,
      },
      description: {
        type: String,
      },
    },
  ],
});

module.exports = mongoose.model("profile", ProfileSchema);
