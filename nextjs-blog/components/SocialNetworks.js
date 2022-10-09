import insta from '../public/images/socialNetworks/insta.png';
import youtube from '../public/images/socialNetworks/youtube.png';
import tiktok from '../public/images/socialNetworks/tiktok.png';

import styles from './socialNetworks.module.scss';

export const SocialNetworks = () => {
  return (
    <div className={styles.container}>
      <a href='https://www.instagram.com/visiondegvms/' target={'_blank'}>
        <img
          src={insta.src}
          height={32}
          width={32}
          alt="Instagram"
        />
      </a>
      <a href='https://www.youtube.com/channel/UClKRcDCcnXV25lRM-7ddruA' target={'_blank'}>
        <img
          src={youtube.src}
          height={32}
          width={32}
          alt="Youtube"
        />
      </a>
      <a href='https://www.tiktok.com/@visiondegvms' target={'_blank'}>
        <img
          src={tiktok.src}
          height={28} // TODO: prendre un meilleur logo pour eviter mauvaise taille
          width={28}
          alt="Tiktok"
        />
      </a>
    </div>
  )
}