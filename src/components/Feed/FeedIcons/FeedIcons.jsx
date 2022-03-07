import { FaRegComment, FaRegPaperPlane } from "react-icons/fa";
import { FiBookmark } from "react-icons/fi";
import HeartButton from "../../HeartButton/HeartButton";
import "./FeedIcons.scss";

function FeedIcons() {
  return (
    <div className="feedicons">
      <HeartButton />
      <FaRegComment size={32} />
      <FaRegPaperPlane size={32} />
      <FiBookmark size={32} className="bookmark" />
    </div>
  );
}

export default FeedIcons;
