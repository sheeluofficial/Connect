const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


// const validator = require('validator');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Please Enter Your Name"],
    },
    email: {
      type: String,
      required: [true, "Please Enter Your Email"],
      unique: true,

      //validate: [validator.isEmail, "Please Enter a valid Email"],  validator used fr verfiy email , pass, isNumaric and return treur and false "i made a email velidator already in clintSide"
    },
    password: {
      type: String,
      required: [true, "Please Enter Your Password"],
      minLength: [8, "Password should have more than 4 characters"],
      select: false, // this will make sure password is sended with data to anyone not even admin when he req for user data
    },
    pic: {
      type: "String",
      required: true,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true,
  
  }
);


const userModel = mongoose.model("userModel", userSchema);

module.exports = userModel;
