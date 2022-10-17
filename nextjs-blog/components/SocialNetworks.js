import insta from '../public/images/socialNetworks/insta.png';
import youtube from '../public/images/socialNetworks/youtube.png';
import tiktok from '../public/images/socialNetworks/tiktok.png';

import styles from './socialNetworks.module.scss';

export const SocialNetworks = () => {
  return (
    <div className={styles.container}>
      <a href='https://www.instagram.com/visiondegvms/' target={'_blank'} className={styles.link}>
        <img
          src={insta.src}
          height={32}
          width={32}
          alt="Instagram"
        />
      </a>
      <a href='https://www.youtube.com/channel/UClKRcDCcnXV25lRM-7ddruA' target={'_blank'} className={styles.link}>
        <img
          src={youtube.src}
          height={36}
          width={36}
          alt="Youtube"
        />
      </a>
      <a href='https://www.tiktok.com/@visiondegvms' target={'_blank'} className={styles.link}>
        <img
          src={tiktok.src}
          height={26} // TODO: prendre un meilleur logo pour eviter mauvaise taille
          width={26}
          alt="Tiktok"
        />
      </a>
    </div>
  )
}