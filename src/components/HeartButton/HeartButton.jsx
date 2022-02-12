import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

function HeartButton() {
  const [isClicked, setIsClicked] = useState(false);

  function clickHeartBtn() {
    setIsClicked((prevClicked) => !prevClicked);
  }

  return (
    <div onClick={clickHeartBtn}>
      {isClicked ? <AiOutlineHeart /> : <AiFillHeart />}
    </div>
  );
}

export default HeartButton;
