import styles from '../../styles/Product.module.css'
import Image from 'next/image'
import { useState } from 'react'
import axios from 'axios'

const Product = ({ Food }) => {
    const [price, setPrice] = useState(0)
    const [size, setSize] = useState(0)

    const changePrice = (number) => {
        setPrice(price + number);
    }

    const handleSize = (sizeIndex) => {
        const difference = Food.prices[sizeIndex] - Food.prices[size]
        setSize(sizeIndex)
        changePrice(difference)
    }

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.imgContainer}>
                    <Image src={Food.image} alt="" objectfit='contain' layout='fill' />
                </div>
            </div>
            <div className={styles.right}>
                <h1 className={styles.title}>{Food.title}</h1>
                <span className={styles.price}>${Food.prices[size]}</span>
                <p className={styles.desc}> {Food.desc} </p>
                <h3 className={styles.choose}>Choose the size</h3>
                <div className={styles.sizes}>
                    <div className={styles.size} onClick={() => handleSize(0)}>
                        <Image src="/img/food-size.png" layout='fill' alt=' ' />
                        <span className={styles.number}>Small</span>
                    </div>
                    <div className={styles.size} onClick={() => handleSize(1)}>
                        <Image src="/img/food-size.png" layout='fill' alt=' ' />
                        <span className={styles.number}>Medium</span>
                    </div>
                    <div className={styles.size} onClick={() => handleSize(2)}>
                        <Image src="/img/food-size.png" layout='fill' alt=' ' />
                        <span className={styles.number}>Large</span>
                    </div>
                </div>
                <h3 className={styles.choose}>Choose additonal ingredients</h3>
                <div className={styles.ingredients}>
                    {Food.extraOptions.map((option) => (
                        <div className={styles.option} key={option._id}>
                            <input
                                type="checkbox"
                                id={option.text}
                                name={option.text}
                                className={styles.checkbox}
                                onChange={(e) => handleChange(e, option)} />
                            <label htmlFor="double">{option.text}</label>
                        </div>
                    ))}

                </div>
                <div className={styles.add}>
                    <input type="number" defaultValue={1} className={styles.quantity} />
                    <button className={styles.button}> Add to Cart </button>
                </div>
            </div>
        </div>
    )
};

export const getServerSideProps = async ({ params }) => {
    const res = await axios.get(`http://localhost:3000/api/products/${params.id}`)
    return {
        props: {
            Food: res.data,
        }
    }
}

export default Product