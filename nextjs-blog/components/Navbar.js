import styles from './navbar.module.scss';

export const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.button}>Accueil</div>
      <div className={styles.button}>Book</div>
      <div className={styles.button}>Voyages</div>
      <div className={styles.button}>Fiction</div>
      <div className={styles.button}>Videos</div>
      <div className={styles.button}>Rap</div>
    </div>
  )
};

export default Navbar;