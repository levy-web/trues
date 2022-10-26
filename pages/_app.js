import 'tailwindcss/tailwind.css';
import { Layout } from '../components';
import { Analytics } from '@vercel/analytics/react';
import '../styles/globals.scss';



function MyApp({ Component, pageProps }) {
  return(
    <Layout>
      <Component {...pageProps} />
      <Analytics />
    </Layout>  
  ) 
  
}

export default MyApp
