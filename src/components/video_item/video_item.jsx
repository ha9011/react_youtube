import React from 'react';
import styles from './video_item.module.css';
const VideoItem = ({videos : {snippet}}) => {
    
   
    return(

    <li className={styles.container}>
        <div className={styles.video}>
            <img className={styles.thumbnails} src={snippet.thumbnails.medium.url} alt="video thumbnail"/>
            <div>
                <p className={styles.title}>{snippet.title}</p>
                <p className={styles.channel}>{snippet.channelTitle}</p>
            </div>

        </div>
      
    </li>
    
    );
};

export default VideoItem;