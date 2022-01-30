import { useState } from "react";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import Navigator from "../Navigator/Navigator";
import "./FeedCarousel.scss";

const IMAGES = [
  "./images/stories/story1.jpg",
  "./images/stories/story2.jpg",
  "./images/stories/story3.jpg",
  "./images/stories/story4.jpg",
  "./images/stories/story5.jpg",
];

function FeedCarousel() {
  const [currIdx, setCurrImgIdx] = useState(0);
  const leftArrowHidden = currIdx === 0 && "hidden";
  const rightArrowHidden = currIdx === 4 && "hidden";

  const slidePrevImg = () => setCurrImgIdx((prevIdx) => prevIdx - 1);
  const slideNextImg = () => setCurrImgIdx((prevIdx) => prevIdx + 1);
  const navigateToImg = (selectedIdx) => setCurrImgIdx(selectedIdx);

  return (
    <>
      <section className="feed-carousel">
        <IoIosArrowDropleftCircle
          size={40}
          className={`arrow left ${leftArrowHidden}`}
          onClick={slidePrevImg}
        />
        <ul className="feed-carousel__slider" style={{ "--currIdx": currIdx }}>
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
      <Navigator currIdx={currIdx} navigateToImg={navigateToImg} maxDots={5} />
    </>
  );
}

export default FeedCarousel;
