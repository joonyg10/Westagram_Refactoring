import FeedHeader from "./FeedHeader/FeedHeader";
import FeedCarousel from "./FeedCarousel/FeedCarousel";
import FeedIcons from "./FeedIcons/FeedIcons";
import "./Feed.scss";

const Feed = () => {
  return (
    <section className="feed">
      <FeedHeader />
      <FeedCarousel />
      <FeedIcons />
    </section>
  );
};

export default Feed;
