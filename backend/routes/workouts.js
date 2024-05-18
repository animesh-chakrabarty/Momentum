const express = require("express");
const workout = require("../models/workout.models");
const {
  createWorkout,
  getWorkouts,
  getWorkout,
} = require("../controllers/workout.controllers");
const router = express.Router();

// POST a new workout
router.post("/", createWorkout);

// GET all workouts
router.get("/", getWorkouts);

// GET a single workout by id
router.get("/:id", getWorkout);

// DELETE a workout
router.delete("/:id", (req, res) => {
  res.json({
    msg: "DELETE a workout by id",
  });
});

// UPDATE a workout
router.patch("/:id", (req, res) => {
  res.json({
    msg: "UPDATE a workout by id",
  });
});

module.exports = router;
