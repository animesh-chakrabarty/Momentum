import React from "react";

const WorkoutCard = ({ workout, deleteWorkout }) => {
  return (
    <div className="border border-black ">
      <h1>{workout.title}</h1>
      <h2>{workout.load}</h2>
      <h2>{workout.reps}</h2>
      {workout.createdAt}
      <button
        className="px-4 py-2 bg-blue-400"
        onClick={() => deleteWorkout(workout._id)}
      >
        delete
      </button>
    </div>
  );
};

export default WorkoutCard;
