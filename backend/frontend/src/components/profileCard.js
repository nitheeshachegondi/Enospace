import { useRef } from "react";

const MyComponent = () => {
  const myRef = useRef(null);

  return <div ref={myRef}>Hello, world!</div>;
};

function ProfileCard({ profile }) {
  return (
    <div className="profile-card">
      <h3>{profile.name}</h3>
      <p>{profile.role}</p>
      <p>Skills: {profile.skills.join(", ")}</p>
      <div className="photos">
        {profile.photos.map((url, index) => (
          <img key={index} src={url} alt="Profile Work" />
        ))}
      </div>
    </div>
  );
}

export default ProfileCard;
