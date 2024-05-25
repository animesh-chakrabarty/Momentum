import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// importing components
import WorkoutCard from "../components/WorkoutCard";
import WorkoutForm from "../components/WorkoutForm";
import { addWorkouts, removeWorkout } from "../features/workouts/workoutsSlice";

const Home = () => {
  const dispatch = useDispatch();
  const workouts = useSelector((state) => state.workouts);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const res = await fetch("http://localhost:4000/api/workouts");
      const res_json = await res.json();
      // console.log(res_json);

      if (res.ok) {
        dispatch(addWorkouts(res_json));
      }
    };

    fetchWorkouts();
  }, []);

  console.log(workouts);

  const deleteWorkout = async (id) => {
    const res = await fetch("http://localhost:4000/api/workouts/" + id, {
      method: "DELETE",
    });
    const res_json = await res.json();

    if (res.ok) {
      console.log(res_json);
      dispatch(removeWorkout(id));
    }
  };

  return (
    <div className="flex">
      <div className="flex flex-col gap-4">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutCard
              key={workout._id}
              workout={workout}
              deleteWorkout={deleteWorkout}
            />
          ))}
      </div>
      <WorkoutForm />
    </div>
  );
};

export default Home;
