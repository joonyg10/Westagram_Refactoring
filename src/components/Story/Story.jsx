import ProfileImg from "../ProfileImg/ProfileImg";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { StoryData } from "./StoryData";
import "./Story.scss";

function Story() {
  const slideToPrev = () => {
    console.log("slide to left");
  };

  const slideToNext = () => {
    console.log("right arrow is cliked");
  };

  return (
    <section className="story">
      <IoIosArrowDropleftCircle
        onClick={slideToPrev}
        size={36}
        className="arrow"
      />
      <section className="carousel">
        <ul className="carousel__slider">
          {StoryData.map(({ id, imgUrl, username }) => (
            <li key={id}>
              <ProfileImg id={id} imgUrl={imgUrl} username={username} />
            </li>
          ))}
        </ul>
      </section>
      <IoIosArrowDroprightCircle
        onClick={slideToNext}
        size={36}
        className="arrow"
      />
    </section>
  );
}

export default Story;
