import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addWorkout } from "../features/workouts/workoutsSlice";

const WorkoutForm = () => {
  const dispatch = useDispatch();
  const userCredentials = useSelector((state) => state.auth.userCredentials);
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState("");

  //   workout data to send with req body
  const workout = { title, load, reps };
  //   obj to send with POST req containing workout data
  const POST_obj = {
    method: "POST",
    body: JSON.stringify(workout),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userCredentials?.token}`,
    },
  };

  //   reset the form if workout is added successfully
  const resetForm = () => {
    setTitle("");
    setLoad("");
    setReps("");
  };

  //   add new workout to db
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userCredentials) {
      setError("You need to be logged in");
      return;
    }

    const res = await fetch("http://localhost:4000/api/workouts", POST_obj);
    const res_json = await res.json();

    if (!res.ok) {
      setError(res_json.error);
    }

    if (res.ok) {
      resetForm();
      setError(null);
      console.log(res_json);
      dispatch(addWorkout(res_json));
    }
  };

  return (
    <form
      className="flex flex-col justify-between bg-green-200 "
      onSubmit={handleSubmit}
    >
      <h1>Add new workout</h1>

      <div className="flex justify-between">
        <label> Exercise title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="flex justify-between">
        <label> load</label>
        <input
          placeholder="add load.. "
          value={load}
          onChange={(e) => setLoad(e.target.value)}
        />
      </div>

      <div className="flex justify-between">
        <label> reps </label>
        <input
          placeholder="add repetations..."
          value={reps}
          onChange={(e) => setReps(e.target.value)}
        />
      </div>

      <button className="bg-blue-300 ">Add workout</button>
      {error && <div>{error}</div>}
    </form>
  );
};

export default WorkoutForm;
