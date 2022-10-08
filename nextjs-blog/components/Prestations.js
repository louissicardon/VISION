import styles from './prestations.module.scss';

const PRESTATIONS = [
  {
    title: 'Pack Vidéos n°1',
    description: '3 videos courtes Instagram/TikTok (15 à 30s)',
    price: '150€'
  },
  {
    title: 'Pack Vidéos n°2',
    description: '1 Mini-Documentaire Portrait (1 min 30 à 2 min) + 1 video courte Instagram/TikTok (15 à 30s)',
    price: '300€'
  },
  {
    title: 'Pack Vidéos n°3',
    description: '1 Documentaire (4 à 5 minutes) + 1 video courte Instagram/TikTok (15 à 30s)',
    price: '500€'
  },
  {
    title: 'Pack Vidéos n°4',
    description: '1 Vidéo de votre choix (ouvert à tous autres projets videos)',
    price: 'Prix à définir'
  }
];

export const Prestations = () => {
  return (
    <div className={styles.container}>
      {PRESTATIONS.map((presta, key) => (
        <div className={styles.card}>
          <span className={styles.title}>{presta.title}</span>
          <p className={styles.description}>{presta.description}</p>
          <span className={styles.price}>{presta.price}</span>
        </div>
      ))}
    </div>
  )
}

export default Prestations;