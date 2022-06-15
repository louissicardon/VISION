import Navbar from './Navbar';

import styles from './homev2.module.scss';

export const Homev2 = () => {
  console.log('homev2')
  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.title}>Vision de gvms</h1>
      </div>
      <Navbar/>
    </div>
  )
};

export default Homev2;