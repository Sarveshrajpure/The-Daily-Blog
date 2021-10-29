import React from "react";
import "./BlogCards.css";

const BlogCards = ({ title, content }) => {
  return (
    <div className="blogcard-wrapper">
      <div className="blogcard-container">
        <div className="details">
          <div className="title">{title}</div>
          <p className="summary">{content.slice(0, 60)}...</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCards;
