const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  username: { type: String },
  providerId: { type: String },
  information: {type: Object}
});

module.exports = model("User", UserSchema);
