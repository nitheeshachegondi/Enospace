import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css"; // Make sure to add your custom styles

const Profile = () => {
  const [userData, setUserData] = useState(null);

  // Fetch user data when component mounts
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("/api/user/profile"); // Change URL to your backend endpoint
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  if (!userData) {
    return <div>Loading...</div>; // Show loading if data is not available yet
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-photo">
          <img
            src={userData.profilePhoto || "default-profile.png"} // Provide a default image if not available
            alt="Profile"
          />
        </div>
        <div className="profile-info">
          <h2>{userData.name}</h2>
          <p className="profile-role">{userData.role}</p>
          <p className="profile-location">{userData.location}</p>
        </div>
      </div>

      <div className="profile-details">
        <h3>About Me</h3>
        <p>{userData.bio}</p>
      </div>

      <div className="profile-gallery">
        <h3>My Work</h3>
        <div className="photos">
          {userData.photos.map((photo, index) => (
            <div key={index} className="photo-item">
              <img src={photo.url} alt={`Work ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="profile-footer">
        <button className="message-btn">Send Message</button>
        <button className="edit-profile-btn">Edit Profile</button>
      </div>
    </div>
  );
};

export default Profile;
