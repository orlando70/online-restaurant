import styles from "../styles/Footer.module.css"

const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.card}>
          <h3><span>GiTA</span> Salad</h3>
          <p>
            GiTA Salad is the pioneer of healthy fruit salad with high nutrition.
          </p>
          <h5>Copyright GiTA Salad.</h5>
        </div>
        <div className={styles.card}>
          <h4>Feature</h4>
          <p>Menu</p>
          <p>Promo</p>
          <p>Contact</p>
          <p>About us</p>
        </div>
        <div className={styles.card}>
          <h4 className={styles.title}>Find Our Restaurant</h4>
          <p className={styles.text}>
            71 Abuloma Road.
            <br /> Port Harcourt
            <br /> 0800-1234-5678
          </p>
          <p className={styles.text}>
            2 Jevenik Avenue.
            <br /> Port Harcourt
            <br /> 0800-3444-5678
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}> WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY - FRIDAY
            <br /> 8:00 - 11:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 9:00 - 11:00
          </p>
        </div>
    </div>
  )
}

export default Footer