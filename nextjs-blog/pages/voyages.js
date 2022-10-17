import { DescriptedVideo } from "../components/DescriptedVideo";
import Header from "../components/Header";
import { VOYAGES } from "../data/voyages";

import styles from './voyages.module.scss';

export const Voyages = () => {
  return (
    <>
      <Header /> 
      <div className={styles.container}>
        {VOYAGES.map(({ title, url }) => (
          <DescriptedVideo title={title} videoUrl={url} />
        ))}
      </div>
    </>
  )
}

export default Voyages;