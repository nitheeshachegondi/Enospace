import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProfileForm from "./components/profileForm"; // Corrected file name case
import ProfileCard from "./components/profileCard"; // Corrected file name case
import Profile from "./pages/profile"; // Corrected file name case

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-profile" element={<ProfileForm />} />
        <Route path="/profile" element={<Profile />} />{" "}
        {/* Added Profile route */}
        <Route path="/profile-card" element={<ProfileCard />} />{" "}
        {/* Added ProfileCard route */}
      </Routes>
    </Router>
  );
}

export default App;
