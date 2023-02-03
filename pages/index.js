import Head from 'next/head';
// import styles from '../style//s/Home.module.css';
import { Card } from 'antd';

import theme from '../theme';

export default function Home() {
  return (
    <div className={'container'}>
      <Head>
        <title>App</title>
      </Head>

      <main className={'data'}>
        <Card title={1}>Card</Card>
        <Card title={1}>Card</Card>
        <Card title={1}>Card</Card>
      </main>
    </div>
  );
}
