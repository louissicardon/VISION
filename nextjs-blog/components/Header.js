import Link from 'next/link';

import logo_black from '../public/images/vision-black.svg';

import Navbar from './Navbar';

import { PAGES } from '../constants/pages';

import styles from './header.module.scss';

export const Header = () => {
  return (
    <>
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
      <div className={styles.header}>
        <h1 className={styles.title}>VISION DE GVMS</h1>
        <Navbar/>
      </div>
    </>
  )
}

export default Header;