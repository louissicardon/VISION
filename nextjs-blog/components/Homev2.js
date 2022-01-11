import styles from './homev2.module.scss';

export const Homev2 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.lights}>
        <div className={styles['first-shadow']}>
          <div className={styles['first-light']}></div>
        </div>
        <div className={styles['second-shadow']}>
          <div className={styles['second-light']}></div>
        </div>
      </div>
    </div>
  )
};

export default Homev2;