import React from "react";

const NewsItem = (props) => {
  let { title, description, imgUrl, newsUrl, author, date, source } = props; //If props is an object then title and desc. props should be available to us.
  return (
    <div>
      <div className="card my-3" style={{ width: "18rem" }}>
        <span
          className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
          style={{ left: "87%", zIndex: 1 }}
        >
          {source}
        </span>
        <img
          src={
            !imgUrl
              ? "https://images.hindustantimes.com/img/2022/11/13/1600x900/Breaking-News-Live-Blog-pic_1668329325507_1668383368912_1668383368912.jpg"
              : imgUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            rel="noeferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
