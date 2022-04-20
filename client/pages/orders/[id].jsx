import Image from 'next/image'
import styles from '../../styles/Order.module.css'
import axios from 'axios'

const Order = ({Order}) => {

    const status = Order.status;

    const statusClass = (index) => {
        if (index - status < 1) return styles.done;
        if (index - status === 1) return styles.inProgress;
        if (index - status > 1) return styles.undone
    }
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.row}>
                <table className={styles.table }>
                <tr className={styles.trTitle}>
                    <th>Order Id</th>
                    <th>Customer</th>
                    <th>Address</th>
                    <th>Total</th>
                </tr>
                <tr className={styles.tr}>
                    <td>
                        <span className={styles.id}> {Order.id} </span>
                    </td>
                    <td> 
                        <span className={styles.name}> {Order.customer} </span>
                    </td>
                    <td>
                        <span className={styles.address}> {Order.address} </span>
                    </td>
                    <td>
                        <span className={styles.total}> ${Order.total} </span>
                    </td>
                </tr>
            </table>
                </div>
                <div className={styles.row}>
                    <div className={statusClass(0)}>
                        <Image src="/img/receipt.png" alt='' width={30} height={30}/>
                        <span> PAYMENT </span>
                        <div className={styles.checkedIcon}>
                        <Image className={styles.checkedIcon} src="/img/checkmark.png" alt='' width={20} height={20}/>
                        </div>
                    </div>
                    <div className={statusClass(1)}>
                        <Image src="/img/cooking.png" alt='' width={30} height={30}/>
                        <span> Preparing </span>
                        <div className={styles.checkedIcon}>
                        <Image className={styles.checkedIcon} src="/img/checkmark.png" alt='' width={20} height={20}/>
                        </div>
                    </div>
                    <div className={statusClass(2)}>
                        <Image src="/img/delivery.png" alt='' width={30} height={30}/>
                        <span> On the way </span>
                        <div className={styles.checkedIcon}>
                        <Image className={styles.checkedIcon} src="/img/checkmark.png" alt='' width={20} height={20}/>
                        </div>
                    </div>
                    <div className={statusClass(3)}>
                        <Image src="/img/delivered.png" alt='' width={30} height={30}/>
                        <span> Delivered </span>
                        <div className={styles.checkedIcon}>
                        <Image className={styles.checkedIcon} src="/img/checkmark.png" alt='' width={20} height={20}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.wrapper}>
                    <h2 className={styles.titlen}> CART TOTAL</h2>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}> Subtotal:</b> ${Order.total}
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}> Discount:</b> $0.0
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}> Total:</b> ${Order.total}
                    </div>
                    <button disabled className={styles.button}>PAID</button>
                </div>
            </div>
        </div>
    )
}

export const getServerSideProps = async ({ params }) => {
    const res = await axios.get(`http://localhost:3000/api/orders/${params.id}`)
    return {
        props: {
            Order: res.data,
        }
    }
}
export default Order