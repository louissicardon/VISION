import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import logo_black from '../public/images/vision-black.svg';
import logo_white from '../public/images/vision-white.svg';
import { PAGES } from '../constants/pages';

import styles from './index.module.scss';

export default function LandingPage() {
  const [leaveLandingPage, setLeaveLandingPage] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (leaveLandingPage) {
      const timeout = setTimeout(() => router.push(PAGES.HOME), 1900);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [leaveLandingPage]);

  // TODO: désactiver scrollbar pendant le scale
  return (
    <>
      <div className={styles.container}>
        <div className={`${leaveLandingPage ? styles.leave : styles.logo}`}>
          <img
            src={logo_black.src}
            height={288}
            width={288}
            alt="Vision"
            onClick={() => setLeaveLandingPage(true)}
          />
        </div>
      </div>
    </>
  )
}