import "./App.css";
import { Routes, Route } from "react-router-dom";

// importing pages and components
import Home from "./pages/Home";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="h-screen p-10 px-10 bg-red-200 ">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
