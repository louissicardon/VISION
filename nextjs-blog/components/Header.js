import Link from 'next/link';

import logo_black from '../public/images/vision-black.svg';

import Navbar from './Navbar';
import { SocialNetworks } from './SocialNetworks';

import { PAGES } from '../constants/pages';

import styles from './header.module.scss';

export const Header = () => {
  return (
    <>
      <div className={styles.container}>
        <Link href={PAGES.HOME}>
          <a>
            <img
              src={logo_black.src}
              height={65}
              width={65}
              alt="Vision"
              className={styles.logo}
              // onClick={() => setLeaveLandingPage(true)}
              />
          </a>
        </Link>
        <h1 className={styles.title}>VISION DE GVMS</h1>
        <SocialNetworks />
      </div>
      <div className={styles.header}>
        <Navbar/>
      </div>
    </>
  )
}

export default Header;