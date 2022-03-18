import { useState } from "react";
import ProfileImg from "../ProfileImg/ProfileImg";
import Icon from "../Icon/Icon";
import { StoryData } from "./StoryData";
import "./Story.scss";

function Story() {
  const [currIdx, setCurrIdx] = useState(0);

  const slideToPrev = () => {
    const nextIdx = currIdx - 2;
    nextIdx >= 3 ? slideToNextIdx(nextIdx) : doNotSlideIdxOverflown(0);
  };

  const slideToNext = () => {
    const nextIdx = currIdx + 2;
    const lastIdx = StoryData.length - 6;
    nextIdx > lastIdx
      ? doNotSlideIdxOverflown(lastIdx)
      : slideToNextIdx(nextIdx);
  };

  function slideToNextIdx(nextIdx) {
    setCurrIdx(nextIdx);
  }
  function doNotSlideIdxOverflown(lastIdx) {
    setCurrIdx(lastIdx);
  }

  return (
    <section className="story">
      <Icon
        name="left-arrow"
        className="arrow"
        size={36}
        onClick={slideToPrev}
      />
      <section className="carousel">
        <ul className="carousel__slider" style={{ "--currIdx": `${currIdx}` }}>
          {StoryData.map(({ id, imgUrl, username }) => (
            <li key={id}>
              <ProfileImg imgUrl={imgUrl} username={username} gradient />
            </li>
          ))}
        </ul>
      </section>
      <Icon
        name="right-arrow"
        className="arrow"
        size={36}
        onClick={slideToNext}
      />
    </section>
  );
}

export default Story;
