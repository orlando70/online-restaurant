import Image from 'next/image'
import styles from '../styles/Foodcard.module.css'
import Link from 'next/link'
const FoodCard = ({ food }) => {
  return (
    <Link href={`/products/${food._id}`}>
      <div className={styles.container}>
        <Image src={food.image} alt="" width="500" height="500" objectFit='contain' />
        <span className={styles.price}> {food.prices[0]}</span>
        <h1 className={styles.title}> {food.title}</h1>
        <p className={styles.desc}> {food.desc}</p>
      </div>
    </Link>
  )
}

export default FoodCard