import "./ProfileImg.scss";

function ProfileImg({
  imgUrl,
  username,
  size = "md",
  gradient = false,
  onClickHandler,
}) {
  const maxImg = size === "md" ? "4.5rem" : "3rem";
  const style = { "--size": maxImg, "--gradientShow": gradient && 1 };

  return (
    <figure className="profile-image">
      <div className="profile-image__wrapper" style={style}>
        <img src={imgUrl} alt="profile" onClick={onClickHandler} />
      </div>
      <p className="username">{username}</p>
    </figure>
  );
}

export default ProfileImg;
