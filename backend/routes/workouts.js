const express = require("express");

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
router.post("/", (req, res) => {
  res.json({
    msg: "POST a new workout",
  });
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
