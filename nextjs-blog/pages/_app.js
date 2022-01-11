// composant actif sur toutes les pages (mettre navbar par exemple)
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/global.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}