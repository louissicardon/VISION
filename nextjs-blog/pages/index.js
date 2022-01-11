import { useEffect, useState } from 'react';

import logo_black from '../public/images/vision-black.svg';
import logo_white from '../public/images/vision-white.svg';

import { Home } from '../components/Home';
import { Homev2 } from '../components/Homev2';

import styles from './index.module.scss';

export default function LandingPage() {
  const [leaveLandingPage, setLeaveLandingPage] = useState(false);
  const [showHome, setShowHome] = useState(false);

  useEffect(() => {
    if (leaveLandingPage) {
      const timeout = setTimeout(() => setShowHome(true), 2500);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [leaveLandingPage]);

  // TODO: désactiver scrollbar pendant le scale
  return (
    <>
      {!showHome ? (
        <div className={styles.container}>
          <div className={`${styles.logo} ${leaveLandingPage ? styles.leave : ''}`}>
            <img
              src={logo_black.src}
              height={288}
              width={288}
              alt="Vision"
              onClick={() => setLeaveLandingPage(true)}
            />
          </div>
        </div>
      ) : (
        // <Home />
        <Homev2 />
      )}
    </>
  )
}
