import { useState } from "react";
import { AiOutlineHeart, AiFillCloseCircle } from "react-icons/ai";
import { FaRegTrashAlt } from "react-icons/fa";
import "./Comment.scss";

function Comment() {
  const [startX, setStartX] = useState(0);
  const [draggedX, setDraggedX] = useState(0);
  const movedX = draggedX - startX;

  function startDrag(e) {
    setStartX(e.pageX);
  }

  function finishDrag(e) {
    setDraggedX(e.pageX);
  }

  function calcMovedBy(e) {}

  return (
    <li className="comment">
      <section className="comment__front" style={{ "--movedX": `${movedX}` }}>
        <h4 className="comment__writer">enna</h4>
        <p className="comment__content">Comments Here</p>
        <AiOutlineHeart size={28} />
      </section>
      <section className="comment__delete">
        <div className="icon-wrapper">
          <FaRegTrashAlt size={28} />
        </div>
        <div className="icon-wrapper">
          <AiFillCloseCircle size={28} />
        </div>
      </section>
    </li>
  );
}
export default Comment;
