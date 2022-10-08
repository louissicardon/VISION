import YoutubeVideo from '../components/YoutubeVideo';
import Header from '../components/Header';

import styles from './home.module.scss';
import Prestations from '../components/Prestations';

export const Home = () => {
  return (
    <div>
      <Header/>
      <div className={styles.content}>
        <div className={styles.video}>
          {/* <YoutubeVideo
            src={'assets/videos/V_NewWorld.mp4'}
            playing={true}
            width={750}
            height={422}
          /> */}
        </div>
        <div className={styles.definition}>
          <div>
            <p className={styles['text-23px']}>Vision (n.f.) :<br/></p>
            <p>&emsp;1. Perception visuelle un monde extérieur.<br/>
            &emsp;2. Conception personelle de quelque chose, manière de voir.<br/>
            &emsp;3. Hallucination, perception surnaturelle.</p>
            <p className={styles['text-23px']}>Avoir une vision, c'est se projeter dans le futur et avoir un impact sur sa destinée. 💫</p>
          </div>
        </div>
        <div className={styles['text-container']}>
          {/* <p>{HOME_TEXT}</p> */}
          <p className={styles.title}>MON HISTOIRE</p>
          <div className={styles.text}>
            <p>
              Salut à tous c’est GVMS, et bienvenue sur VISION.
            </p>
            <p>
              Je m’appelle Paul Vaillant, j’suis originaire de Bordeaux et j’suis Réalisateur-Monteur.
              J’ai toujours été intéressé par l’image, que ce soit devant ou derrière la caméra.
              J’ai eu la chance de faire des études dans l’audiovisuel, où j’ai étudié l’écriture de scénarios, le tournage et la post-production.
              J’ai toujours ressenti le besoin de partager mes émotions, mes sentiments, et évacuer tout ce que j’ai sur le cœur. Que ce soit dans le rap, ou dans la réalisation.
            </p>
            <p>
              Lors de mes études supérieures, j’ai découvert les portraits documentaires, et j’y ai de suite pris goût : M’intéresser à une passion ou un métier qui m’est inconnu, et entrer dans l’intimité d’une vie pour en laisser une empreinte.
              En parallèle, j’travaillais dans un studio de musique. J’étais en charge de réaliser des vidéos pour les réseaux sociaux : des teasers et aftermovies d’événements, des concerts, des lives sessions et des interviews.
              À 20 ans, j’ai réalisé avec mes proches mon premier court-métrage qui s’intitule Céleste : l’histoire d’un jeune homme assez solitaire qui découvre l’écriture et le rap comme moyens d’expression pour évacuer ses pensées noires. Une histoire proche de la mienne, dans laquelle je joue le personnage principal.
              À cette même période, j’ai découvert le développement personnel, la volonté d’évoluer constamment pour devenir quelqu’un de meilleur, aussi bien sur le point physique que mental. Ça m’a appris l’auto-discipline et a boosté ma détermination.
              Lorsque j’ai eu mon diplôme, j’ai intégré le service de communication de ma ville en tant que Réalisateur-Monteur et Community Manager.
              J’étais en charge de créer du contenu vidéo adaptés aux réseaux sociaux (Facebook, Instagram & YouTube). J’ai ainsi réalisé plus d’une centaine de vidéos sur l’attractivité de la Ville (des reportages, de l’événementiel, du sport et des interviews). J’étais aussi en charge de l’Instagram des Vibrations Urbaines, un festival culturel et sportif, mélangeant concerts, street art & contests de glisse.
              J’ai travaillé 2 ans pour la Ville. Ce que j’y faisais me plaisait, notamment rencontrer des nouvelles personnes et raconter leurs projets en images.
            </p>
            <p>  
              Mais le jour est venu où j’ai ressenti un manque, la sensation que je passais à côté de ma propre vie : il fallait que j’évolue, aussi bien sur le plan personnel que professionnel.
              J’ai écrit une liste de challenges que j’devais de réaliser dans l’année. Le premier était : Voyager seul à l’étranger.
              J’ai quitté mon travail et je suis parti seul en Sicile, pour sortir de ma zone de confort, aller vers l’inconnu pour en apprendre plus sur moi-même et gagner en confiance en soi.
              Depuis, j’ai enchaîné les voyages, en Espagne, au Brésil, aux Etats-Unis et au Mexique. Ça m’a ouvert l’esprit, j’ai découvert qu’il y avait autre chose que ma réalité en France :J’ai réalisé des rêves, rencontré des centaines de personnes aux vies différentes et aujourd’hui je peux affirmer que le voyage m’a sauvé.
            </p>
            <p>  
              Un autre challenge était de créer mon entreprise. C’est chose faite, je viens de lancer Vision spécialisée dans la création de contenus vidéos adaptés aux réseaux sociaux.
              Elle cible tous profils souhaitant des portraits documentaires afin de se développer sur les plateformes : entreprises, associations, sportifs, artistes, voyageurs et autres.
              Je souhaite en premier lieu travailler sur des projets qui font sens, et qui ont un impact positif sur le Monde, portant des valeurs de partage et de progrès.
              À ce jour, il est primordiale d’avoir une bonne communication vidéo en tant que marque : c’est pourquoi je propose mes services en accordant une importance particulière au partage d’émotions et au souci du détail.
            </p>
            <p>  
              Aussi, j’aimerai travailler sur des projets dans lesquels je suis devant la caméra, que ce soit de la figuration vidéo (publicité, fiction, clips) ou des shootings photos.
              Mon book vidéos & photos est disponible sur mon site internet : visiondegvms.com 
              N’hésitez pas à me contacter pour une collaboration sur mon site, sur les réseaux sociaux ou par mail : gvmscontact@gmail.com
              Merci de m’avoir écouté, je vous souhaite beaucoup de réussites dans tout ce que vous entreprenez et j’ai hâte de travailler avec vous. 🤝
            </p>
          </div>
        </div>
        <div className={styles.prestation}>

          <Prestations/>
        </div>
      </div>
    </div>
  )
};

export default Home;