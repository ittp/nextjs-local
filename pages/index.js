import Head from 'next/head';
import { Card } from 'antd';

import theme from '../theme';
import axios from 'axios';

axios.get('', {
  headers: {
    Authorization:
      'Bearer 41b5e76cb1fd4b76ced9421a8f3174e381094182e66b877d1a95b337c6acc661',
  },
});
export default function Home() {
  return (
    <div className={'container'}>
      <Head>
        <title>App</title>
      </Head>

      <main className={'data'}>
        <Card title={1} description={'Data'} extra={'Extra'} avatar={'Avatar'}>
          Card
        </Card>
        <Card title={1}>Card</Card>
        <Card title={1}>Card</Card>
      </main>
    </div>
  );
}
