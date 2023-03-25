import React from "react";
import NewsCard from "./NewsCard";

const Body = ({ newsInfo }) => {
  return (
    <div className="Body">
      <div className="container">
        <h2>LATEST NEWS & TOP UPDATES</h2>
        <div className="card-container">
          {newsInfo.map((a, i) => {
            return <NewsCard key={i} newsData={a} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Body;
