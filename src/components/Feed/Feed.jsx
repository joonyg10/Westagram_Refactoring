import FeedHeader from "./FeedHeader/FeedHeader";
import FeedCarousel from "./FeedCarousel/FeedCarousel";
import "./Feed.scss";

const Feed = () => {
  return (
    <section className="feed">
      <FeedHeader />
      <FeedCarousel />
    </section>
  );
};

export default Feed;
