import YouTube from 'react-youtube';

import styles from './youtubeVideo.module.scss';

export const YoutubeVideo = ({ videoId }) => {
  const options = {
    width: 840,
    height: 472.5,
    playerVars: {
      autoplay: 0,
      modestbranding: 1,
      rel: 0, // Related videos will come from the same channel as the video that was just played
    },
  };

  return (
    <YouTube
      videoId={videoId}
      className={styles['video-container']}
      opts={options}
    />
  )
};

export default YoutubeVideo;