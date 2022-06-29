import '../styles/globals.css'
import './App.css'

import { enableStaticRendering } from 'mobx-react-lite';

function MyApp({ Component, pageProps }) {
  const isServer = typeof window === 'undefined'
  enableStaticRendering(isServer);
  return <Component {...pageProps} />
}

export default MyApp



