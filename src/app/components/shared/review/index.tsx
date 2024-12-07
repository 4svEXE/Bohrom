import React from "react";
import "./index.scss";

interface ReviewProps {
  rating: number;
  postedAt: string;
  text: string;
  author: string;
}

const Review: React.FC<ReviewProps> = ({ rating, postedAt, text, author }) => {
  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`star ${index < rating ? "filled" : ""}`}
        aria-hidden="true"
      >
        ★
      </span>
    ));
  };

  return (
    <div className="review-card">
      <div className="review-header">
        <div className="review-stars flex items-center">{renderStars()} ({rating}/5)</div>
        <span className="review-date">{postedAt}</span>
      </div>
      <p className="review-text">{text}</p>
      <p className="review-author">— {author}</p>
    </div>
  );
};

export default Review;
