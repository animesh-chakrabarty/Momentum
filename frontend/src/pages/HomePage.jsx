import { useEffect, useState } from "react";
import WorkoutCard from "../components/WorkoutCard";
import WorkoutForm from "../components/WorkoutForm";

const HomePage = () => {
  const [workouts, setWorkouts] = useState(null);
  const [triggerRerender, setTriggerRerender] = useState(0);

  const handleTriggerRerender = () => {
    setTriggerRerender((prev) => prev + 1);
  };

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
  }, [triggerRerender]);

  return (
    <div className="flex">
      <div className="flex flex-col gap-4">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutCard key={workout._id} workout={workout} />
          ))}
      </div>
      <WorkoutForm triggerRerender={handleTriggerRerender} />
    </div>
  );
};

export default HomePage;
