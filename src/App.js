import React from "react";
import { useEffect, useState } from "react";
import { getTopStoriesId, getTopNewsStories } from "./newsUrl/hackerNewsApi.js";
import Header from "./components/header/Header.jsx";
import Body from "./components/body/Body.jsx";
import Loading from "./components/Loading.jsx";


const App = () => {
  const [newsID, setNewsID] = useState([]);
  const [news, setNews] = useState([]);
  const [page, setPage] = useState([0, 10]);
  const [loading, setLoading] = useState(true);

  async function loadNews() {
    const newsIDData = await getTopStoriesId();
    const newsData = await getTopNewsStories(
      newsIDData.slice(page[0], page[1])
    );
    setNewsID(newsIDData);
    setNews(newsData);
    setLoading(false);
  }

  useEffect(() => {
    loadNews();
  }, [page]);

  async function handelInfiniteScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setLoading(true);
      setPage(([prev1, prev2]) => [prev1, prev2 + 10]);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, []);

  if (!news[news.length - 1]) {
    return (
      <div style={{ margin: "20%" }}>
        <Loading />
      </div>
    );
  }

  return (
    <div className="App">
      <Header />
      <Body newsInfo={news} />
      {loading && <Loading />}
    </div>
  );
};

export default App;
