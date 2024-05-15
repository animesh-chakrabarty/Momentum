require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");

const PORT = process.env.PORT;

// creating express app
const app = express();

// setting up middleware
app.use(express.json());
// express.json() middleware checks if any JSON data is present in the req body or not. If it has, express.json() parses the data and makes it available in req.body object
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
// the above middleware intercepts any req made to the server and logs the path and req method

// routes
app.use("/api/workouts", workoutRoutes);

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
