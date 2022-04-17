import Head from 'next/head'
import axios from 'axios'
import Featured from '../components/Featured'
import FoodList from '../components/FoodList'
import styles from '../styles/Home.module.css'

export default function Home({Foods}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Food Vendor</title>
        <meta name="description" content="Gets you freshly cooked meals at your doorstep" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
      <FoodList Foods={Foods}/>
    </div>
  )
}

export const getServerSideProps = async () => {
  const res = await axios.get('http://localhost:3000/api/products')
  return {
    props: {
      Foods: res.data,
    }
  }
}
