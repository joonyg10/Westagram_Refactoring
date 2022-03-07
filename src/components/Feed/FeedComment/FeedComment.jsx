import Comment from "../../Comment/Comment";
import CommentBox from "../../CommentBox/CommentBox";
import "./FeedComment.scss";

function FeedComment({ comments, addNewComment, deleteComment }) {
  return (
    <section className="feedComment">
      {comments?.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
          deleteComment={deleteComment}
        />
      ))}

      <CommentBox />
    </section>
  );
}

export default FeedComment;
