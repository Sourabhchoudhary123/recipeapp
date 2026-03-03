import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import recipeRoutes from "./routes/recipeRoutes.js";

dotenv.config(); //it will load the env variable
connectDB(); // connect to mongodb

//////////////////
const app = express();// create the express application

app.use(express.json()); // we have to use this middleware when we post the data using the post method

app.use("/", recipeRoutes) 

// start the server
app.listen(process.env.PORT, () => {
    console.log("server is running at port number 5002")
})
