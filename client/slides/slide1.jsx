import styles from '../styles/Navbar.module.css'
import Image from 'next/image';


const Home = () => {

  return (
      <div className={styles.container}>
          <div className={styles.body}>
              <div className={styles.left}>
                  <div className={styles.tree}>
                      <Image src="/img/tree.jpg" alt="" width="100" height="100" objectFit='contain' />
                  </div>
                  <div className={styles.title}>
                      <h1>Bringing fresh friuts and vegetables to you</h1>
                  </div>
                  <div className={styles.desc}>
                      <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                          Laboriosam, molestiae perspiciatis. Ducimus dicta eligendi
                          quae iusto enim ipsa molestiae voluptatum similique dolorem a.
                          Excepturi pariatur, sapiente provident impedit accusamus repellendus?
                      </p>
                  </div>
                  <button className={styles.button}>Start Shopping</button>
              </div>
              <div className={styles.right}>
                  <Image src="/img/home.jpg" alt="" width="700" height="700" objectFit='contain' />
              </div>
          </div>
      </div>
  )
}

export default Home