import React from 'react';
import { useEffect, useState } from 'react';
import {getTopStoriesId, getTopNewsStories} from './newsUrl/hackerNewsApi.js';
import Header from './components/header/Header.jsx';
import Body from './components/body/Body.jsx';

// const Header = React.lazy(() => import('./components/header/Header.jsx'));
// const Body = React.lazy(() => import('./components/body/Body.jsx'));




const App = () => {
  const [newsID, setNewsID] = useState([]);
      const [news, setNews] = useState([]);
      
  async function loadNews() {
          const storyIDData = await getTopStoriesId();
          const  storyData = await getTopNewsStories(storyIDData.slice(0, 10));
          setNewsID(storyIDData);
          setNews(storyData);
    }
      
    useEffect(() => {
          loadNews();
    }, [])

        if (!news[news.length-1]) {
          return <iframe src="https://embed.lottiefiles.com/animation/98993"></iframe>
        }
    
  return (
    <div className='App'>

          {/* <Header /> */}
      {/* {news.map((a) => <Body id={a.id} key={a.id} title={a.title} by={a.by}  url={a.url} />)} */}
      <Body newsInfo={news} />
    
    </div>
  )
}

export default App;
