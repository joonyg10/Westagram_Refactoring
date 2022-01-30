import { useState } from "react";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import "./FeedCarousel.scss";
const IMAGES = [
  "./images/stories/story1.jpg",
  "./images/stories/story2.jpg",
  "./images/stories/story3.jpg",
  "./images/stories/story4.jpg",
  "./images/stories/story5.jpg",
];

function FeedCarousel() {
  const [currImgIdx, setCurrImgIdx] = useState(0);
  const leftArrowHidden = currImgIdx === 0 && "hidden";
  const rightArrowHidden = currImgIdx === 4 && "hidden";

  const slidePrevImg = () => setCurrImgIdx((prevIdx) => prevIdx - 1);
  const slideNextImg = () => setCurrImgIdx((prevIdx) => prevIdx + 1);

  return (
    <section className="feed-carousel">
      <IoIosArrowDropleftCircle
        size={40}
        className={`arrow left ${leftArrowHidden}`}
        onClick={slidePrevImg}
      />
      <ul className="feed-carousel__slider" style={{ "--currIdx": currImgIdx }}>
        {IMAGES.map((imgUrl, idx) => (
          <li key={idx.toString()}>
            <img src={imgUrl} alt="carousel" />
          </li>
        ))}
      </ul>
      <IoIosArrowDroprightCircle
        size={40}
        className={`arrow right ${rightArrowHidden}`}
        onClick={slideNextImg}
      />
    </section>
  );
}

export default FeedCarousel;
