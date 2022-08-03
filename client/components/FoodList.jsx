import styles from '../styles/FoodList.module.css'
import FoodCard from './FoodCard'

const FoodList = ({ Foods }) => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.textContainer}>
                    <div className={styles.text}>
                        <h1>Enjoy the best Salad and Get Amazing <span>Discounts</span></h1>
                    </div>
                </div>
                <div className={styles.food}>
                    {Foods.map((food) => (
                        <FoodCard key={food._id} food={food} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FoodList