import { useDispatch } from "react-redux";
import { removeUserCredentials } from "../features/auth/authSlice";
import { clearWorkouts } from "../features/workouts/workoutsSlice";

export const useLogout = () => {
  const dispatch = useDispatch();
  const logout = () => {
    // removing user credentials from localStorage
    localStorage.removeItem("momentum-user-credentials");
    // removing user credentials from client state
    dispatch(removeUserCredentials());
    dispatch(clearWorkouts());
  };

  return { logout };
};
