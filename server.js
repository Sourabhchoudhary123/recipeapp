import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import recipeRoutes from "./routes/recipeRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// simple health route
app.get("/", (req, res) => res.send("OK"));

// your routes
app.use("/", recipeRoutes);

// connect to DB (ensure MONGO_URI is set in Render env vars)
connectDB();

// port and host: use Render's PORT, fallback to 5002, bind to 0.0.0.0
const PORT = process.env.PORT || 5002;
const HOST = "0.0.0.0";

app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});