import React from "react";

const WorkoutCard = ({ workout }) => {
  return (
    <div className="border border-black ">
      <h1>{workout.title}</h1>
      <h2>{workout.load}</h2>
      <h2>{workout.reps}</h2>
      {workout.createdAt}
    </div>
  );
};

export default WorkoutCard;
