import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import "./HeartButton.scss";

function HeartButton() {
  const [isClicked, setIsClicked] = useState(false);

  function clickHeartBtn() {
    setIsClicked((prevClicked) => !prevClicked);
  }

  return isClicked ? (
    <AiOutlineHeart className="heart" size={34} onClick={clickHeartBtn} />
  ) : (
    <AiFillHeart
      className="heart filled-heart"
      size={34}
      onClick={clickHeartBtn}
    />
  );
}

export default HeartButton;
