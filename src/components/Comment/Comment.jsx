import { useState } from "react";
import HeartButton from "../HeartButton/HeartButton";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaRegTrashAlt } from "react-icons/fa";
import "./Comment.scss";

let animationID;

function Comment() {
  const [startX, setStartX] = useState(0);
  const [draggedX, setDraggedX] = useState(0);
  const movedX = draggedX - startX;

  function startDrag(e) {
    animationID = 1;
    setStartX(e.pageX);
    setDraggedX(e.pageX);
  }

  function updatedDraggedX(e) {
    animationID && setDraggedX(e.pageX);
  }

  function finishDrag(e) {
    animationID = 0;
  }

  function resetDraggedComment() {
    setStartX(0);
    setDraggedX(0);
  }

  return (
    <li className="comment" onMouseLeave={finishDrag}>
      <section
        className="comment__front"
        style={{ "--movedX": `${movedX}px` }}
        onMouseDown={startDrag}
        onMouseMove={updatedDraggedX}
        onMouseUp={finishDrag}
      >
        <h4 className="comment__writer">enna</h4>
        <p className="comment__content">Comments Here</p>
        <HeartButton size="sm" />
      </section>
      <section className="comment__delete">
        <div className="icon-wrapper">
          <FaRegTrashAlt size={28} />
        </div>
        <div className="icon-wrapper" onClick={resetDraggedComment}>
          <AiFillCloseCircle size={28} />
        </div>
      </section>
    </li>
  );
}
export default Comment;
