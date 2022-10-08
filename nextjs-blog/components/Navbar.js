import Link from 'next/link';

import { PAGES } from '../constants/pages';
import styles from './navbar.module.scss';

export const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.button}>BOOK</div>
      <div className={styles.button}>VOYAGE</div>
      <div className={styles.button}>FICTION</div>
      <div className={styles.button}>VIDEOS</div>
      <div className={styles.button}>RAP</div>
      <Link href={PAGES.GVMS}>
        <a className={styles.button}>
          GVMS
        </a>
      </Link>
    </div>
  )
};

export default Navbar;