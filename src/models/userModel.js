import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

  username: {
    type: String,
    required: [true, "Please username"]
  },
  email: {
    type: String,
    required: [true, "Please username"]
  },
  password: {
    type: String,
    required: [true, "Please username"]
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  forgetPasswordToken: String,
  forgetPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: String,

})

const User = mongoose.models.users || mongoose.model("users", userSchema)

export default User