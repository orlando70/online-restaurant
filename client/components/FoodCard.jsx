import Image from 'next/image'
import styles from '../styles/Foodcard.module.css'

const FoodCard = () => {
  return (
    <div className={styles.container}>
        <Image src="/img/food.jpg" alt="" width="500" height="500" objectFit='contain'/>
        <h1 className={styles.title}> KING SIZE BURGER DI CAPRIO</h1>
        <p className={styles.desc}> Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
    </div>
  )
}

export default FoodCard