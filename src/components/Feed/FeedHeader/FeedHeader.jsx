import ProfileImg from "../../ProfileImg/ProfileImg";
import Icon from "../../Icon/Icon";
import "./FeedHeader.scss";

function FeedHeader() {
  return (
    <header className="feed-header">
      <ProfileImg imgUrl="./images/stories/story2.jpg" size="sm" />
      <p className="feed-header__writer">Username</p>
      <Icon className="util-btn" />
    </header>
  );
}

export default FeedHeader;
