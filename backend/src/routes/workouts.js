const express = require("express");
const workout = require("../models/workout.models");
const requireAuth = require("../middlewares/requireAuth");
const {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workout.controllers");
const router = express.Router();

router.use(requireAuth);

// POST a new workout
router.post("/", createWorkout);

// GET all workouts
router.get("/", getWorkouts);

// GET a single workout by id
router.get("/:id", getWorkout);

// DELETE a workout
router.delete("/:id", deleteWorkout);

// UPDATE a workout
router.patch("/:id", updateWorkout);

module.exports = router;
