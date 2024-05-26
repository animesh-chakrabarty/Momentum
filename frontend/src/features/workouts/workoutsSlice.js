import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  workouts: [],
};

export const workoutsSlice = createSlice({
  name: "workouts",
  initialState,
  reducers: {
    // add workouts to state on reload
    setWorkouts: (state, action) => {
      state.workouts = action.payload;
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
    clearWorkouts: (state, action) => {
      state.workouts = [];
    },
  },
});

export const { setWorkouts, addWorkout, removeWorkout, clearWorkouts } =
  workoutsSlice.actions;

export default workoutsSlice.reducer;
