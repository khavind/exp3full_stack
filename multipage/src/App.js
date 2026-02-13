import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";

function App() {
  return (
    <Router>
      <nav style={{ padding: "10px", background: "#222" }}>
        <Link to="/" style={{ color: "white", marginRight: "20px" }}>
          Dashboard
        </Link>
        <Link to="/profile" style={{ color: "white" }}>
          Profile
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;