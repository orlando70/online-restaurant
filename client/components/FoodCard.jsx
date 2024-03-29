import Image from 'next/image'
import styles from '../styles/Foodcard.module.css'
import Link from 'next/link'
const FoodCard = ({ food }) => {
  return (
    <Link href={`/products/${food._id}`}>
      <div className={styles.container}>
        <div className={styles.image}>
          <Image src={food.image} alt="" width="300" height="400" objectFit='cover' />
        </div>
        <span className={styles.price}> ${food.prices[0]}</span>
        <h1 className={styles.title}> {food.title}</h1>
        <p className={styles.desc}> {food.desc}</p>
      </div>
    </Link>
  )
}

export default FoodCard