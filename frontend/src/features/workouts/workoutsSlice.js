import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  workouts: [],
};

export const workoutsSlice = createSlice({
  name: "workouts",
  initialState,
  reducers: {
    // add workouts to state on reload
    addWorkouts: (state, action) => {
      state.workouts = action.payload;
      console.log(action.payload);
    },
    // add new workout to state
    addWorkout: (state, action) => {
      state.workouts.push(action.payload);
    },
    // remove workout from state
    removeWorkout: (state, action) => {
      state.workouts = state.workouts.filter(
        (workout) => workout._id !== action.payload
      );
    },
  },
});

export const { addWorkouts, addWorkout, removeWorkout } = workoutsSlice.actions;

export default workoutsSlice.reducer;
