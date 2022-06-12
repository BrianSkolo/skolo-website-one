import '../styles/globals.css'
import '../styles/Home.module.css';
import Layout from '../components/Layout'
// import 'bootstrap/dist/css/bootstrap.css';
import Head from "next/head";



export default function MyApp({ Component, pageProps }) {
  return (

    <>
      <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Layout>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}


