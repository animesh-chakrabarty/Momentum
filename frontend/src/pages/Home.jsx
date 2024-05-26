import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// importing components
import WorkoutCard from "../components/WorkoutCard";
import WorkoutForm from "../components/WorkoutForm";
import { setWorkouts, removeWorkout } from "../features/workouts/workoutsSlice";

const Home = () => {
  const dispatch = useDispatch();
  const workouts = useSelector((state) => state.workouts.workouts);
  const userCredentials = useSelector((state) => state.auth.userCredentials);

  console.log(userCredentials);

  useEffect(() => {
    const fetchWorkouts = async () => {
      if (!userCredentials) {
        return;
      }
      const res = await fetch("http://localhost:4000/api/workouts", {
        headers: {
          Authorization: `Bearer ${userCredentials?.token}`,
        },
      });
      const res_json = await res.json();

      if (res.ok) {
        dispatch(setWorkouts(res_json));
      }
    };

    fetchWorkouts();
  }, [userCredentials]);

  const deleteWorkout = async (id) => {
    if (!userCredentials) {
      return;
    }
    const res = await fetch("http://localhost:4000/api/workouts/" + id, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${userCredentials.token}`,
      },
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
          workouts?.map((workout) => (
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
