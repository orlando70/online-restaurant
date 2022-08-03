import styles from '../styles/Subscribe.module.css'

const Subscribe = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.textContainer}>
                    <h1>
                        Subscribe To Get The Latest Promo From G<span>i</span>TA Salad
                    </h1>
                    <p>
                        We recommend you subscribe to our newsletter to get the latest promotional update from us.
                    </p>
                    <div className={styles.email}>
                        <input type="text" placeholder="Enter your email address" />
                        <button className={styles.button}> Subscribe </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscribe