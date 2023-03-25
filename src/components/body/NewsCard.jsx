import React, { useState } from "react";
import Card from "react-bootstrap/Card";

const NewsCard = ({ newsData }) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <Card
      className="newsCard"
      style={{ width: "60rem", backgroundColor: "#e8f0fe" }}
      onClick={() => setShowDetails(!showDetails)}
    >
      <Card.Title style={{ fontSize: "25px" }}>{newsData.title}</Card.Title>
      {showDetails && (
        <>
          <Card.Subtitle className="mb-2 text-muted">
            By {newsData.by}
          </Card.Subtitle>
          <Card.Text>
            <span>
              {" "}
              {new Date(newsData.time * 1000).toLocaleDateString("en-US", {
                hour: "numeric",
                minute: "numeric",
              })}
            </span>{" "}
            <br />
            <span> type: {newsData.type}</span>
          </Card.Text>
          <Card.Link className="news-link" href={newsData.url} target="_blank">
            view more
          </Card.Link>
        </>
      )}
    </Card>
  );
};

export default NewsCard;
