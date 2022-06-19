import styles from './navbar.module.scss';

export const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.button}>ACCUEIL</div>
      <div className={styles.button}>BOOK</div>
      <div className={styles.button}>VOYAGE</div>
      <div className={styles.button}>FICTION</div>
      <div className={styles.button}>VIDEOS</div>
      <div className={styles.button}>RAP</div>
    </div>
  )
};

export default Navbar;