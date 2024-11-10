require("dotenv").config();
import express, { json } from "express";
import { connect } from "mongoose";
import cors from "cors";
const app = express();

connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(json());

app.use("/api/profiles", require("./routes/profileRoutes"));

app.listen(5000, () => console.log("Server running on port 5000"));
