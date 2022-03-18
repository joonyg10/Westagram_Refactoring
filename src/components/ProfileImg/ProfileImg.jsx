import "./ProfileImg.scss";

function ProfileImg({
  imgUrl,
  username,
  size = "md",
  gradient = false,
  onClickHandler,
}) {
  const maxImg = size === "md" ? "4.5rem" : "3rem";

  return (
    <figure className="profile-image">
      <div className="profile-image__wrapper">
        <img
          src={imgUrl}
          alt="profile"
          style={{ "--size": maxImg, "--gradient": gradient && true }}
          onClick={onClickHandler}
        />
      </div>
      <p className="username">{username}</p>
    </figure>
  );
}

export default ProfileImg;
