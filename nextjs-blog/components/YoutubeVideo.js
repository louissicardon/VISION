import YouTube from 'react-youtube';
import ReactPlayer from 'react-player'

import styles from './youtubeVideo.module.scss';

export const YoutubeVideo = ({ src, width, height, playing, thumbnail }) => {
  // const options = {
  //   width: 840,
  //   height: 472.5,
  //   playerVars: {
  //     autoplay: 0,
  //     modestbranding: 1,
  //     rel: 0, // Related videos will come from the same channel as the video that was just played
  //   },
  // };

  return (
    // <YouTube
    //   videoId={videoId}
    //   className={styles['video-container']}
    //   opts={options}
    // />
    <ReactPlayer 
      controls
      url={src} 
      width={width}
      height={height}
      muted
      playing={playing}
    />
    // <video src={src} type="video/mp4" style={{ width: "362px", height: "750px" }} />
    // <></>

  )
};

export default YoutubeVideo;