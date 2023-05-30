import React from 'react';

const NewsItem = ({ title, text, image, author, url }) => {
  return (
    <div className="card mb-3">
      <img src={image} className="card-img-top" alt="News" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">By: {author}</p>
        <p className="card-text">{text}</p>
        <a href={url} className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
