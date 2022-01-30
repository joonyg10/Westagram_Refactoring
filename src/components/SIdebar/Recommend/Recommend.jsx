import ProfileImg from "../../ProfileImg/ProfileImg";
import "./Recommend.scss";

function Recommend({ data }) {
  const { imgUrl, username, friendName } = data;
  return (
    <li className="recommend">
      <ProfileImg imgUrl={imgUrl} />
      <div class="box">
        <h4>{username}</h4>
        <p>{friendName}님이 팔로우 합니다.</p>
      </div>
      <a href="/" class="follow-btn">
        팔로우
      </a>
    </li>
  );
}

export default Recommend;
