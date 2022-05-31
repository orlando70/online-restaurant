import styles from '../styles/OrderDetails.module.css';
import { useState } from 'react';

const OrderDetails = ({ total, createOrder, setCash }) => {
    const [customer, setCustomer] = useState('');
    const [address, setAddress] = useState('');

    const handleClick = () => {
        createOrder({ customer, address, total, paymentChannel: 0 })
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>You will be charged ${total} after this delivery.</h1>
                <div className={styles.items}>
                    <label className={styles.label} htmlFor="">Name Surname</label>
                    <input placeholder="john doe" className={styles.input} type="text" onChange={(e) => setCustomer(e.target.value)} />
                </div>
                <div className={styles.items}>
                    <label className={styles.label} htmlFor="">Phone Number</label>
                    <input className={styles.input} type="text" />
                </div>
                <div className={styles.items}>
                    <label className={styles.label} htmlFor="">Address</label>
                    <textarea
                        rows={5}
                        type='text'
                        className={styles.textarea}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
                <button className={styles.button} onClick={handleClick}> Order </button>
            </div>
        </div>
    )
}

export default OrderDetails;