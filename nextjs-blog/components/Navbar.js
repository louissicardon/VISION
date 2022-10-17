import Link from 'next/link';

import { PAGES } from '../constants/pages';
import styles from './navbar.module.scss';

export const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href={PAGES.HOME}>
        <a className={styles.button}>
          ACCUEIL
        </a>
      </Link>
      <Link href={PAGES.GVMS}>
        <a className={styles.button}>
          GVMS
        </a>
      </Link>
      <Link href={PAGES.VOYAGES}>
        <a className={styles.button}>
          VOYAGES
        </a>
      </Link>
      <div className={styles.button}>VIDEOS</div>
      <div className={styles.button}>FICTION</div>
      <div className={styles.button}>RAP</div>
      <div className={styles.button}>CONTACT</div>
    </div>
  )
};

export default Navbar;