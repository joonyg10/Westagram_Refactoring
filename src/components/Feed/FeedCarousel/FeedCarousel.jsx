import { useState } from "react";
import Icon from "../../Icon/Icon";
import Navigator from "../../Navigator/Navigator";
import { IMAGES, HIDDEN } from "../../../constant/Feed";
import "./FeedCarousel.scss";

function FeedCarousel() {
  const [currIdx, setCurrImgIdx] = useState(0);
  const leftArrowHidden = currIdx === 0 && HIDDEN;
  const rightArrowHidden = currIdx === 4 && HIDDEN;

  const slidePrevImg = () => setCurrImgIdx((prevIdx) => prevIdx - 1);
  const slideNextImg = () => setCurrImgIdx((prevIdx) => prevIdx + 1);
  const showClickedSlide = (selectedIdx) => setCurrImgIdx(selectedIdx);

  return (
    <>
      <section className="feed-carousel">
        <Icon
          name="left-arrow"
          className={`arrow left ${leftArrowHidden}`}
          size={40}
          onClick={slidePrevImg}
        />
        <ul className="feed-carousel__slider" style={{ "--currIdx": currIdx }}>
          {IMAGES.map((imgUrl, idx) => (
            <li key={idx.toString()}>
              <img src={imgUrl} alt={imgUrl} />
            </li>
          ))}
        </ul>
        <Icon
          name="right-arrow"
          className={`arrow right ${rightArrowHidden}`}
          size={40}
          onClick={slideNextImg}
        />
      </section>
      <Navigator
        currIdx={currIdx}
        showClickedSlide={showClickedSlide}
        dotsCnt={5}
      />
    </>
  );
}

export default FeedCarousel;
