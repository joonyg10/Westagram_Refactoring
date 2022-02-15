import Comment from "../../Comment/Comment";
import CommentBox from "../../CommentBox/CommentBox";
import "./FeedComment.scss";

function FeedComment() {
  return (
    <section className="feedComment">
      <Comment />
      <CommentBox />
    </section>
  );
}

export default FeedComment;
