import { useEffect, useState } from "react";
import WorkoutCard from "../components/WorkoutCard";

const HomePage = () => {
  const [workouts, setWorkouts] = useState(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const res = await fetch("http://localhost:4000/api/workouts");
      const res_json = await res.json();
      // console.log(res_json);

      if (res.ok) {
        setWorkouts(res_json);
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <div>
      <h1>List of workouts</h1>
      <div className="flex flex-col gap-4">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutCard key={workout._id} workout={workout} />
          ))}
      </div>
    </div>
  );
};

export default HomePage;
