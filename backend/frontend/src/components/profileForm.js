import React, { useState } from "react";
import axios from "axios";

function ProfileForm() {
  const [profileData, setProfileData] = useState({
    name: "",
    role: "",
    skills: "",
  });
  const [selectedPhotos, setSelectedPhotos] = useState([]);

  const handleInputChange = (e) =>
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  const handleFileChange = (e) => setSelectedPhotos(e.target.files);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/profiles",
        profileData
      );
      if (selectedPhotos.length) {
        const formData = new FormData();
        Array.from(selectedPhotos).forEach((file) =>
          formData.append("photos", file)
        );
        await axios.post(
          `http://localhost:5000/api/profiles/${data._id}/upload`,
          formData
        );
      }
    } catch (error) {
      console.error("Error creating profile:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleInputChange}
        required
      />
      <input
        type="text"
        name="role"
        placeholder="Role"
        onChange={handleInputChange}
        required
      />
      <input
        type="text"
        name="skills"
        placeholder="Skills"
        onChange={handleInputChange}
      />
      <input type="file" multiple onChange={handleFileChange} />
      <button type="submit">Save Profile</button>
    </form>
  );
}

export default ProfileForm;
