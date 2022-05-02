import Head from 'next/head'
import axios from 'axios'
import Featured from '../components/Featured'
import FoodList from '../components/FoodList'
import styles from '../styles/Home.module.css'
import {useState} from 'react'
import Add from '../components/Add'
import AddButton from '../components/AddButton'

export default function Home({Foods, isAdmin}) {
  const [close, setClose] = useState(true);
  return (
    <div className={styles.container}>
      <Head>
        <title>Food Vendor</title>
        <meta name="description" content="Gets you freshly cooked meals at your doorstep" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
      {isAdmin && <AddButton setClose={setClose}/>}
      <FoodList Foods={Foods}/>
      {!close && <Add setClose={setClose}/>}
    </div>
  )
}

export const getServerSideProps = async (ctx) => {
  const cookie = ctx.req?.cookies || ""
  let isAdmin = false;
  if (cookie.token === process.env.TOKEN) {
    isAdmin = true;
  }
  const res = await axios.get('http://localhost:3000/api/products')
  return {
    props: {
      Foods: res.data,
      isAdmin
    }
  }
}
