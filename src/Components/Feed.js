import React from 'react';
import YoutubeItem from 'Components/YoutubeItem';

const Feed = () => {
  const [feeds, setFeeds] = React.useState([]);
  React.useEffect(() =>{
    // const events = new EventSource('/youtube/waitEvent');
    const events = new EventSource('https://hls-mon.sbs.co.kr/youtube/waitEvent');
    // const events = new EventSource('http://localhost:8000/youtube/waitEvent');
    events.onmessage = event => {
      console.log(event)
      const {data} = event;
      let feed;
      try {
        feed = JSON.parse(data);
      } catch(err) {
        feed = data;
      }
      setFeeds(feeds => [...feeds, feed])
    }
  },[])
  return (
   <div>
     {feeds.map(feed => (
         <YoutubeItem feed={feed}></YoutubeItem>
     ))}
   </div> 
  )
}

export default React.memo(Feed);