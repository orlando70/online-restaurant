import styles from '../styles/OrderDetails.module.css';

const OrderDetails = () => {
    const [customer, setCustomer] = useState('');
    const [address, setAddress] = useState('');

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>You will be charged $322 after this delivery.</h1>
                <div className={styles.items}>
                    <label className={styles.label} htmlFor="">Name Surname</label>
                    <input placeholder="john doe" className={styles.input} type="text" onChange={((e) => setCustomer(e.target.value))} />
                </div>
            </div>
        </div>
    )
}

export default OrderDetails;