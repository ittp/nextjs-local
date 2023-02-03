import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Card } from 'antd';

import theme from '../theme';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>App</title>
      </Head>

      <main className={styles.main}>
        <Card title={1}>Card</Card>
      </main>
    </div>
  );
}
