import FeedHeader from "./FeedHeader/FeedHeader";
import FeedCarousel from "./FeedCarousel/FeedCarousel";
import FeedIcons from "./FeedIcons/FeedIcons";
import "./Feed.scss";
import FeedComment from "./FeedComment/FeedComment";

const Feed = () => {
  return (
    <section className="feed" aria-label="feed">
      <FeedHeader />
      <FeedCarousel />
      <FeedIcons />
      <FeedComment />
    </section>
  );
};

export default Feed;
