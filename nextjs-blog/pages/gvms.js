import Carousel from '../components/Carousel';
import Header from '../components/Header';
import YoutubeVideo from '../components/YoutubeVideo';
import phone_img from '../public/images/phone.png';
import Prestations from '../components/Prestations'

import styles from './gvms.module.scss'

export const gvms = () => {

  return (
    <div>
      <Header />
      <div className={styles.content}>
        <div className={styles.title}>
          <p>
            "The eyes chico, they never lie" 👁️
          </p>
        </div>
        <div className={styles['video-container']}>
          {/* <img className={styles.phone} src={phone_img.src}></img> */}
          <div className={styles.video}>
            <YoutubeVideo src={'https://www.youtube.com/watch?v=yi1i-4wxv_Q'} width={750} height={422}/>
          </div>
        </div>
        <div className={styles['prestations-container']}>
          {/* <Carousel /> */}
          <Prestations />
        </div>
      </div>
    </div>
  )
}

export default gvms;