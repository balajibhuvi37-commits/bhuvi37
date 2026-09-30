import ProfileImage from "./assets/images/profile.png";

const ProfileCard = ()=> {
  return (
    <div className="profile-card">
      <img src={ProfileImage} alt="Profile" />

      <h2>Bhuvanesh</h2>
      <p w-20 text-gray>Full Stack Developer</p>

      <button>View Profile</button>
    </div>
  );
}

export default ProfileCard;