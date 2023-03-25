
const NEWS_URL = `https://hacker-news.firebaseio.com/v0/`;

export async function getTopStoriesId () {
        const response = await fetch(`${NEWS_URL}/topstories.json`);
        const topStoriesID = await response.json();
        // console.log(topStoriesID);
        return topStoriesID;
};
const data = getTopNewsStory();
// console.log(data)
export async function getTopNewsStory (id) {
    const response = await fetch(`${NEWS_URL}/item/${id}.json`).then();
    const newsData = await response.json();
    // console.log(newsData);
             
    const newsDetails = {
        by : newsData.by,
        id : newsData.id,
        time : newsData.time,
        title : newsData.title,
        type : newsData.type,
        url : newsData.url,
    }
        // console.log(newsDetails);
    return newsDetails;
    
}

export async function getTopNewsStories (id = []) {
        const response = await Promise.all(id.map(getTopNewsStory));
        return response;
}

