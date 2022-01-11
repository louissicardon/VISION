import styles from './home.module.scss';

export const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles['first-light']}></div>
        <div className={styles['second-light']}></div>
      </div>
      {/* TODO: afficher texte avec la shadow à l'opposé du bouton */}
      <div className={styles.content}>
        <div className={styles['text-container']}>
          <div className={styles['first-button']}>SOUNDS</div>
          <div className={styles['second-button']}>TRIPS</div>
        </div>
      </div>
    </div>
  )
};

export default Home;