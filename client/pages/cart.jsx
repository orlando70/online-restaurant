import styles from '../styles/Cart.module.css'
import Image from 'next/image'

const Cart = () => {
  return (
    <div className={styles.container }>
        <div className={styles.left}>
            <table className={styles.table }>
                <tr className={styles.trTitle}>
                    <th>Product</th>
                    <th>Name</th>
                    <th>Extras</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
                <tr className={styles.tr}>
                    <td>
                        <div className={styles.imgContainer}>
                            <Image src="/img/food-size.png" alt="" layout='fill' objectFit="cover "/>
                        </div>
                    </td>
                    <td>
                        <span className={styles.name}> CORALZO </span>
                    </td>
                    <td> 
                        <span className={styles.extras}> Triple decker, Spicy sauce</span>
                    </td>
                    <td>
                        <span className={styles.price}> $19.99</span>
                    </td>
                    <td>
                        <span className={styles.quantity}> 1 </span>
                    </td>
                    <td>
                        <span className={styles.total}> $40.40</span>
                    </td>
                </tr>
                <tr className={styles.tr}>
                    <td>
                        <div className={styles.imgContainer}>
                            <Image src="/img/food-size.png" alt="" layout='fill' objectFit="cover "/>
                        </div>
                    </td>
                    <td>
                        <span className={styles.name}> CORALZO </span>
                    </td>
                    <td> 
                        <span className={styles.extras}> Triple decker, Spicy sauce</span>
                    </td>
                    <td>
                        <span className={styles.price}> $19.99</span>
                    </td>
                    <td>
                        <span className={styles.quantity}> 1 </span>
                    </td>
                    <td>
                        <span className={styles.total}> $40.40</span>
                    </td>
                </tr>
            </table>
        </div>
        <div className={styles.right}>
            <div className={styles.wrapper }>
                <h2 className={styles.titlen}> CAR TOTAL</h2>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}> Subtotal:</b> $34.45
                </div>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}> Discount:</b> $0.0
                </div>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}> Total:</b> $34.45
                </div>
                <button className={styles.button}>CHECKOUT NOW!</button>
            </div>
        </div>
    </div>
  )
}

export default Cart