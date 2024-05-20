const mongoose = require("mongoose");
const workout = require("../models/workout.models");

// POST on "/" - post a new workout
const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body;

  try {
    // creating a doc in workouts collection
    const workout_doc = await workout.create({ title, load, reps });
    res.status(200).json(workout_doc);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// GET on "/" - get all workouts
const getWorkouts = async (req, res) => {
  // getting all the workouts from db and sorting them by time of creation
  const workouts = await workout.find({}).sort({ createdAt: -1 });
  res.status(200).json(workouts);
};

// GET on "/:id" - get a single workout by id
const getWorkout = async (req, res) => {
  // accessing id
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }
  // finding doc by id
  const singleWorkout = await workout.findById(id);

  // if workout doesn't exist return 404
  if (!singleWorkout) {
    return res.status(404).json({
      error: "No such workout",
    });
  }

  res.status(200).json(singleWorkout);
};

// DEL on "/:id" - delete a workout by id
const deleteWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }

  const workout_del = await workout.findOneAndDelete({ _id: id });

  if (!workout_del) {
    return res.status(404).json({ error: "No such workout" });
  }

  res.status(200).json(workout_del);
};

// PATCH on "/:id" - update a workout by id
const updateWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }

  const workoutUpdated = await workout.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!workoutUpdated) {
    return res.status(404).json({ error: "No such workout" });
  }

  res.status(200).json(workoutUpdated);
};

module.exports = {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
};
