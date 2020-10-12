import React, {useState, useEffect} from 'react';

import './app.css';
import VideoList from './components/video_list/video_list';




const App = (props) => {
  
  const [videos, setVideos] = useState([]);

  useEffect(()=>{
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&maxResults=25&chart=mostPopular&key=AIzaSyAfV0_0Zmr3RzHOaILUlFc1zWBBADi_oBk&key=AIzaSyAfV0_0Zmr3RzHOaILUlFc1zWBBADi_oBk", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result["items"]))
      .catch(error => console.log('error', error));
  },[])
  
 
  
  
  return(
    <>
      <VideoList
          videos = {videos}
      />
    </>
  );

};

export default App;

