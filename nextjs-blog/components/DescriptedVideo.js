import YoutubeVideo from "./YoutubeVideo"

import styles from './DescriptedVideo.module.scss';

export const DescriptedVideo = ({ title, videoUrl, width, height, description }) => {

  return (
    <div className={styles.container}>
      {title && 
        <p>{title}</p>
      }
      {description && 
        <p>{description}</p>
      }
      <YoutubeVideo 
        src={videoUrl}
        width={750}
        height={422}
      />
    </div>
  )
}

export default DescriptedVideo;