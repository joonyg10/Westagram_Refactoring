import "./ProfileImg.scss";

function ProfileImg({ imgUrl, username, size = "md" }) {
  const maxImg = size === "md" ? "4.5rem" : "3rem";

  return (
    <div className="profile-image">
      <img src={imgUrl} alt="profile" style={{ "--size": maxImg }} />
      <p className="username">{username}</p>
    </div>
  );
}

export default ProfileImg;
