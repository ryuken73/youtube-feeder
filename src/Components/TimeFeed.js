import React from 'react';

const TimeFeed = () => {
  const [time, setTime] = React.useState('');
  React.useEffect(() =>{
    const events = new EventSource('/youtube/waitEvent?event=serverTime');
    console.log(events)
    events.onmessage = event => {
      const {data} = event;
      const parsed= JSON.parse(data);
      setTime(parsed.serverTime);
    }
  },[])
  return (
   <div>
       Server Time: ${time};
   </div> 
  )
}

export default React.memo(TimeFeed);