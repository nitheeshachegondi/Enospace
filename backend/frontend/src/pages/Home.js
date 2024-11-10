import React, { useEffect, useState } from "react";
import axios from "axios";
import ProfileCard from "../components/profileCard";

function Home() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/profiles")
      .then((response) => setProfiles(response.data))
      .catch((error) => console.error("Error fetching profiles", error));
  }, []);

  return (
    <div>
      {profiles.map((profile) => (
        <ProfileCard key={profile._id} profile={profile} />
      ))}
    </div>
  );
}

export default Home;
