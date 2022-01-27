import Head from 'next/head';
import styles from '../styles/Home.module.css';
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Treck The Hill</title>
        <meta name="description" content="Treck the Hill" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Treck The Hill</h1>
      </main>
    </div>
  );
}
