import ProfileImg from "../../ProfileImg/ProfileImg";
import { BsThreeDots } from "react-icons/bs";
import "./FeedHeader.scss";

function FeedHeader() {
  return (
    <header className="feed-header">
      <ProfileImg imgUrl="./images/stories/story2.jpg" size="sm" />
      <p className="feed-header__writer">Username</p>
      <BsThreeDots size={28} className="util-btn" />
    </header>
  );
}

export default FeedHeader;
