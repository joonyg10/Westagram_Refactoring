import "./ProfileImg.scss";

function ProfileImg({ imgUrl, username, size = "md", onClickHandler }) {
  const maxImg = size === "md" ? "4.5rem" : "3rem";

  return (
    <div className="profile-image">
      <img
        src={imgUrl}
        alt="profile"
        style={{ "--size": maxImg }}
        onClick={onClickHandler}
      />
      <p className="username">{username}</p>
    </div>
  );
}

export default ProfileImg;
