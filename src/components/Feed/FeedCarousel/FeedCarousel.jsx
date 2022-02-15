import { useState } from "react";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import Navigator from "../../Navigator/Navigator";
import "./FeedCarousel.scss";
import { IMAGES, HIDDEN } from "../../../constant/Feed";

function FeedCarousel() {
  const [currIdx, setCurrImgIdx] = useState(0);
  const leftArrowHidden = currIdx === 0 && HIDDEN;
  const rightArrowHidden = currIdx === 4 && HIDDEN;

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
              <img src={imgUrl} alt={imgUrl} />
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
