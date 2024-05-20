import { useEffect, useState } from "react";

const HomePage = () => {
  const { workouts, setWorkouts } = useState(null);

  useEffect(() => {
    const fetchWorkouts = () => {
      // const res = await fetch("/api/workouts");
      // const res_json = await res.json();
      // console.log(res_json);
      // console.log(7);

      fetch("http://localhost:4000/api/workouts")
        .then((res) => {
          return res.json();
        })
        .then((res_json) => {
          console.log(res_json);
        });

      // setWorkouts(res);
    };

    fetchWorkouts();
  }, []);

  return (
    <div>
      <h1>List of workouts</h1>
    </div>
  );
};

export default HomePage;
