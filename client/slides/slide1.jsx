import styles from '../styles/Navbar.module.css'
import Image from 'next/image';
import AddButton from '../components/AddButton'
import Add from '../components/Add'
import { useState } from 'react'

const Home = ({ Admin }) => {

    const [close, setClose] = useState(true);

    return (
        <div className={styles.container}>
            <div className={styles.body}>
                <div className={styles.left}>
                    <div className={styles.tree}>
                        <Image src="/img/tree.jpg" alt="" width="100" height="100" objectFit='contain' />
                    </div>
                    <div className={styles.title}>
                        <h1>Bringing the tastiest meals to you</h1>
                    </div>
                    <div className={styles.desc}>
                        <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Laboriosam, molestiae perspiciatis. Ducimus dicta eligendi
                            quae iusto enim ipsa molestiae voluptatum similique dolorem a.
                            Excepturi pariatur, sapiente provident impedit accusamus repellendus?
                        </p>
                    </div>
                    <div className={styles.buttons}>
                        <button className={styles.button}>Order Now</button>
                        {Admin && <AddButton setClose={setClose} />}
                    </div>
                    {!close && <Add setClose={setClose} />}
                </div>
                <div className={styles.right}>
                    <Image src="/img/home-removebg.png" alt="" width="700" height="700" objectFit='contain' />
                    <svg className={styles.mainblob} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#8A3FFC" d="M44.3,-77C57.5,-69,68.4,-57.4,77.1,-44C85.8,-30.5,92.2,-15.3,93.1,0.5C94,16.3,89.3,32.6,80.7,46.2C72.1,59.7,59.6,70.6,45.5,78.6C31.3,86.6,15.7,91.8,0.5,90.9C-14.7,90.1,-29.4,83.2,-42,74.3C-54.7,65.5,-65.4,54.7,-73.4,42C-81.4,29.3,-86.9,14.6,-87.6,-0.4C-88.3,-15.5,-84.3,-30.9,-77.1,-45C-69.8,-59.2,-59.4,-72,-46,-79.8C-32.6,-87.7,-16.3,-90.7,-0.4,-90C15.5,-89.3,31,-85,44.3,-77Z" transform="translate(100 100)" />
                    </svg>
                    <div >
                        <svg className={styles.blob1} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#BAE6FF" d="M5.1,6.7C-8.4,26.3,-44.7,36.5,-49.4,22C-54,7.5,-27,-31.8,-8.9,-36.9C9.3,-42,18.6,-13,5.1,6.7Z" transform="translate(100 100)" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home