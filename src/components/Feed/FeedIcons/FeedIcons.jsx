import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment, FaRegPaperPlane } from "react-icons/fa";
import { FiBookmark } from "react-icons/fi";
import "./FeedIcons.scss";

function FeedIcons() {
  return (
    <section className="feedicons">
      <AiOutlineHeart size={32} />
      <FaRegComment size={32} />
      <FaRegPaperPlane size={32} />
      <FiBookmark size={32} className="bookmark" />
    </section>
  );
}

export default FeedIcons;
