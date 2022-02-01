import { AiOutlineHeart, AiFillCloseCircle } from "react-icons/ai";
import { FaRegTrashAlt } from "react-icons/fa";

import "./Comment.scss";

function Comment() {
  return (
    <li className="comment">
      <section className="comment__front">
        <h4 className="comment-writer">enna</h4>
        <p>Comments Here</p>
        <AiOutlineHeart size={28} />
      </section>
      <section className="comment__delete">
        <FaRegTrashAlt size={32} />
        <AiFillCloseCircle size={32} />
      </section>
    </li>
  );
}
export default Comment;
