import styles from '../../styles/Product.module.css'
import Image from 'next/image'
import { useState } from 'react'

const Product = () => {
    const [size, setSize] = useState(0)
    const Food = {
        id: 1,
        img: "/img/food.jpg",
        name: "Lorenzo",
        price: [19.9, 23.9, 27.9],
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta nobis ipsam nam, velit corporis ut tempora id voluptatum odit placeat nostrum cupiditate suscipit, perspiciatis illum cum. Libero rem perspiciatis quas!'
    }
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.imgContainer}>
                    <Image src={Food.img} alt="" objectfit='cover' layout='fill' />
                </div>
            </div>
            <div className={styles.right}>
                <h1 className={styles.name}>{Food.name}</h1>
                <span className={styles.price}>${Food.price[size]}</span>
                <p className={styles.desc}> {Food.desc} </p>
                <h3 className={styles.choose}>Choose the size</h3>
                <div className={styles.sizes}>
                    <div className={styles.size} onClick={() => setSize(0)}>
                        <Image src="/img/food-size.png" layout='fill' alt=' ' />
                        <span className={styles.number}>Small</span>
                    </div>
                    <div className={styles.size} onClick={() => setSize(1)}>
                        <Image src="/img/food-size.png" layout='fill' alt=' ' />
                        <span className={styles.number}>Medium</span>
                    </div>
                    <div className={styles.size} onClick={() => setSize(2)}>
                        <Image src="/img/food-size.png" layout='fill' alt=' ' />
                        <span className={styles.number}>Large</span>
                    </div>
                </div>
                <h3 className={styles.choose}>Choose additonal ingredients</h3>
                <div className={styles.ingredients}>
                    <div className={styles.option}>
                        <input type="checkbox" id="double" name='double' className={styles.checkbox} />
                        <label htmlFor="double">Double decker</label>
                    </div>
                    <div className={styles.option}>
                        <input type="checkbox" id="cheese" name='cheese' className={styles.checkbox} />
                        <label htmlFor="cheese">Extra cheese</label>
                    </div>
                    <div className={styles.option}>
                        <input type="checkbox" id="triple" name='triple' className={styles.checkbox} />
                        <label htmlFor="triple">Triple decker</label>
                    </div>
                    <div className={styles.option}>
                        <input type="checkbox" id="spicy" name='spicy' className={styles.checkbox} />
                        <label htmlFor="spicy">Spicy Sauce</label>
                    </div>
                </div>
                <div className={styles.add}>
                    <input type="number" defaultValue={1} className={styles.quantity} />
                    <button className={styles.button}> Add to Cart </button>
                </div>
            </div>
        </div>
    )
}

export default Product