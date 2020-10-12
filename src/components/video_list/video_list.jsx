import React from 'react';
import VideoItem from '../video_item/video_item';

const VideoList = ({videos}) => {



    return(
        
            <ul>
                {videos.map( video => (<VideoItem key={video["id"]} videos={video}/>))}
            </ul>
        
        

    );
};

export default VideoList;