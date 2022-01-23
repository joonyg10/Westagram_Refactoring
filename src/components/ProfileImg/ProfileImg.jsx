import "./ProfileImg.scss";

function ProfileImg({ imgUrl, username }) {
  return (
    <div className="profile-image">
      <img src={imgUrl} alt="profile" />
      <p className="username">{username}</p>
    </div>
  );
}

export default ProfileImg;
