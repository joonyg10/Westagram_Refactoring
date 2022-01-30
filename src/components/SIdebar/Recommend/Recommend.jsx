import ProfileImg from "../../ProfileImg/ProfileImg";
import "./Recommend.scss";

function Recommend({ data }) {
  const { imgUrl, username, friendName } = data;

  return (
    <li className="recommend">
      <ProfileImg imgUrl={imgUrl} size="sm" />
      <div className="box">
        <h4>{username}</h4>
        <p className="">{friendName}님이 팔로우 합니다.</p>
      </div>
      <a href="/" className="follow-btn">
        팔로우
      </a>
    </li>
  );
}

export default Recommend;
