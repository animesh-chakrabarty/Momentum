import React, { useState } from "react";

const WorkoutForm = ({ triggerRefetch }) => {
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState("");

  console.log("component reenderer");
  //   workout data to send with req body
  const workout = { title, load, reps };
  //   obj to send with POST req containing workout data
  const POST_obj = {
    method: "POST",
    body: JSON.stringify(workout),
    headers: {
      "Content-Type": "application/json",
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

    const res = await fetch("http://localhost:4000/api/workouts", POST_obj);
    const res_json = await res.json();

    if (!res.ok) {
      setError(res_json.error);
    }

    if (res.ok) {
      resetForm();
      setError(null);
      console.log(res_json);
      triggerRefetch();
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
          type="number"
          placeholder="add load.. "
          value={load}
          onChange={(e) => setLoad(e.target.value)}
        />
      </div>

      <div className="flex justify-between">
        <label> reps </label>
        <input
          type="number"
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
