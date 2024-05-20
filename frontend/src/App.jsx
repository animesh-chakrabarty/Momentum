import "./App.css";
import { Routes, Route } from "react-router-dom";

// importing pages and components
import HomePage from "../pages/HomePage";
import NavBar from "../components/NavBar";

function App() {
  return (
    <div className=" bg-red-200 h-screen p-10 px-10">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
