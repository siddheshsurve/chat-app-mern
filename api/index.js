
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

import { UserModel } from "./models/User.js"

dotenv.config();
// mongoose.connect(process.env.MONGO_URL);
async function connectDb () {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected");
    } catch(err) {
        console.log(err);
    }
}

connectDb();

const app = express();

app.get("/test", (req, res) => {
  res.json("test ok");
});

//registration : d ata need to send
app.post("/register", async (req, res) => {
    const {username, password} = req.body;
    await UserModel.create({username, password});
    
});

app.listen(3001);
