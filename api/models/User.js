// const mongoose = require("mongoose");
import mongoose from "mongoose"

const UserSchema = mongoose.Schema(
  {
    username: { type: String, unique: true },
    password: String,
  },
  { timestamps: true }
);

//modelname, schemaname
export const UserModel = mongoose.model("User", UserSchema);

