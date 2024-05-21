// import packages
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
// importing routes
const workoutRoutes = require("./src/routes/workouts");
const userRoutes = require("./src/routes/user");

const PORT = process.env.PORT;
const corsOptions = {
  origin: "http://localhost:5173",
};
// creating express app
const app = express();

// setting up middlewares
app.use(cors(corsOptions));
// used cors package to resolve CORS policy error
app.use(express.json());
// express.json() middleware checks if any JSON data is present in the req body or not. If it has, express.json() parses the data and makes it available in req.body object
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
// the above middleware intercepts any req made to the server and logs the path and req method

// routes
app.use("/api/workouts", workoutRoutes);
app.use("/api/user", userRoutes);
// connecting to DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listening to port
    app.listen(PORT, () => {
      console.log("connected to DB & listening to port : ", PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
