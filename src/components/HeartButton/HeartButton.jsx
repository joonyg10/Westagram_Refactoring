import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import "./HeartButton.scss";

function HeartButton({ size = "md" }) {
  const [isClicked, setIsClicked] = useState(false);
  const heartSize = size === "md" ? 34 : 28;

  function clickHeartBtn() {
    setIsClicked((prevClicked) => !prevClicked);
  }

  return isClicked ? (
    <AiOutlineHeart
      className="heart"
      size={heartSize}
      onClick={clickHeartBtn}
    />
  ) : (
    <AiFillHeart
      className="heart filled-heart"
      size={heartSize}
      onClick={clickHeartBtn}
    />
  );
}

export default HeartButton;
