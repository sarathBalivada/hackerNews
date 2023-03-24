import React from 'react';
import { useEffect, useState } from 'react';
import {getTopStoriesId, getTopNewsStories, getTopNewsStory} from './newsUrl/hackerNewsApi.js';
import Header from './components/header/Header.jsx';
import Body from './components/body/Body.jsx';

const App = () => {
  const [storyID, setStoryID] = useState([]);
      const [story, setStory] = useState([]);
      
  async function loadNews() {
          const storyIDData = await getTopStoriesId();
          const  storyData = await getTopNewsStories(storyIDData.slice(0, 10));
          setStoryID(storyIDData);
          setStory(storyData);
    }
      
    useEffect(() => {
          loadNews();
    }, [])
  return (
    <div className='App'>
      <Header />
      {story.map((a) => <Body id={a.id} key={a.id} title={a.title} by={a.by} />)}
    </div>
  )
}

export default App
