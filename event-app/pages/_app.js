import "../styles/globals.css";
import Head from 'next/head';

import Layout from '../components/layout/layout'
import Notification from '../components/ui/notification'
import { NotificationContextProvider } from '../store/notfication-context'

export default function App({ Component, pageProps }) {
  return (
    <NotificationContextProvider>
    <Layout>
      <Head>
        <title>Next Event</title>
        <meta name="description" content="NextJS Events" />
        <meta name="viewport" 
        content="initial-scale=1.0, width=device-width"
        />
      </Head>
      <Component {...pageProps} />
      <Notification  title='Test' message='This is a test' status='pending'/>
    </Layout>
    </NotificationContextProvider>
  );
}
