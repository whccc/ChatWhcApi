const { Schema, model } = require("mongoose");
const UserSchema = new Schema({
  blobImageUser: {
    type: String,
    trim: true,
  },
  strNameAndLastName: {
    type: String,
    trim: true,
    required: true,
  },
  strUser: {
    type: String,
    trim: true,
    required: true,
  },
  strPassword: {
    type: String,
    trim: true,
    required: true,
  },
});

module.exports = model("Users", UserSchema);
