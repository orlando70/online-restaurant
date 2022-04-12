import styles from '../styles/FoodList.module.css'
import FoodCard from './FoodCard'

const FoodList = ({ Foods }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                THE BEST FOOD IN TOWN
            </h1>
            <p className={styles.desc}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium,
                quo optio iure fugiat unde magnam tempore eos. Nulla ex aut blanditiis
                cum sed, delectus quo nisi, aperiam, molestiae ullam qui.
            </p>
            <div className={styles.wrapper}>
                {Foods.map((food) => (
                    <FoodCard key={food._id} food={food}/>
                ))}
            </div>
        </div>
    )
}

export default FoodList