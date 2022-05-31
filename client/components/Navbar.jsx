import styles from '../styles/Navbar.module.css'
import {useSelector} from 'react-redux'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {

    const quantity = useSelector(state => state.cart.quantity)

  return (
    <div className={styles.container}>
        <div className={styles.header}>
              <div className={styles.item}>
              </div>
              <div className={styles.item}>
                  <ul className={styles.list}>
                      <Link href='/' passHref>
                          <li className={styles.listItem}>Homepage</li>
                      </Link>
                      <li className={styles.listItem}>Products</li>
                      <li className={styles.listItem}>Menu</li>
                      <Image src="/img/logo.png" alt="" width="100px" height="100px" />
                      <li className={styles.listItem}>Events</li>
                      <li className={styles.listItem}>Blog</li>
                      <li className={styles.listItem}>Contacts</li>
                  </ul>
              </div>
              <Link href="/cart" passHref>
                  <div className={styles.item}>
                      <div className={styles.cart}>
                          <Image src="/img/cart.png" alt="" width="30px" height="30px" />
                          <div className={styles.counter}>{quantity}</div>
                      </div>
                  </div>
              </Link>
          </div>
    </div>
  )
}

export default Navbar