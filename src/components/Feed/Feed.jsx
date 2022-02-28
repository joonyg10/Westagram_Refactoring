import { useState, useEffect } from "react";
import FeedHeader from "./FeedHeader/FeedHeader";
import FeedCarousel from "./FeedCarousel/FeedCarousel";
import FeedIcons from "./FeedIcons/FeedIcons";
import FeedComment from "./FeedComment/FeedComment";
import "./Feed.scss";

const Feed = () => {
  const [comments, setComments] = useState([]);

  function addNewComment(newComment) {
    const lastCommentIdx = comments.length - 1;
    const nextID = comments[lastCommentIdx].id + 1;
    setComments((prevComments) => [
      ...prevComments,
      { id: nextID, username: "enna", comment: newComment },
    ]);
  }

  function deleteComment(deleteID) {
    setComments((prevComments) =>
      prevComments.filter((comment) => comment.id !== deleteID)
    );
  }

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setComments(data.feedComments));
  }, []);

  return (
    <section className="feed" aria-label="feed">
      <FeedHeader />
      <FeedCarousel />
      <FeedIcons />
      <FeedComment
        comments={comments}
        addNewComment={addNewComment}
        deleteComment={deleteComment}
      />
    </section>
  );
};

export default Feed;
