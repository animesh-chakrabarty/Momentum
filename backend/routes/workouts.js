const express = require("express");
const workout = require("../models/workout.models");
const router = express.Router();

// GET all workouts
router.get("/", (req, res) => {
  res.json({
    msg: "GET all workouts",
  });
});

// GET a single workout by id
router.get("/:id", (req, res) => {
  res.json({
    msg: "GET a single workout by id",
  });
});

// POST a new workout
router.post("/", async (req, res) => {
  const { title, reps, load } = req.body;

  try {
    const workout_doc = await workout.create({ title, load, reps });
    res.status(200).json(workout_doc);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

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
