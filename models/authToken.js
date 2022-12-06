const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const authTokenSchema = new Schema({
  token: {
    type: String,
    required: true,
    index: true,
  },
  expiresAt: {
    type: Date,
    required: true,
  },
  refreshToken: {
    type: String,
    required: true,
    index: true,
  },
  user: {
    id: String,
    role: String,
  },
}, {
  timestamps: true
});

const AuthToken = mongoose.model("AuthToken", authTokenSchema);

module.exports = AuthToken;
