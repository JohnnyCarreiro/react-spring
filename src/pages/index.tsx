import Head from 'next/head'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Template Next Tipescript</title>
      </Head>
      <section>
        <h1>Template using typescript and Sass</h1>
      </section>
    </div>
  )
}
