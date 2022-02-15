import { useState } from "react";
import { BiSmile } from "react-icons/bi";
import "./CommentBox.scss";

function CommentBox() {
  const [newComment, setNewComment] = useState("");

  function updateUsetComment(e) {
    setNewComment(e.target.value);
  }

  return (
    <section className="commentBox">
      <BiSmile size={24} />
      <textarea
        placeholder="댓글을 입력하세요"
        value={newComment}
        onChange={updateUsetComment}
      />
      <button className={`commentBox--add ${newComment && "activate"}`}>
        추가
      </button>
    </section>
  );
}
export default CommentBox;
