import React from 'react';

const VideoItem = ({videos}) => {
    
    console.log(videos);
    return(
    <div>{videos.snippet.title}</div>
    );
};

export default VideoItem;