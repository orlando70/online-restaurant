import Image from "next/image"
import styles from "../styles/Footer.module.css"

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.items}>
        <Image src="/img/footer.jpg" alt="" layout="fill" objectFit="cover" />
      </div>
      <div className={styles.items}>
        <div className={styles.card}>
          <h2 className={styles.motto}>HOME COOKED MEALS YOU NEED</h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            71 Abuloma Road.
            <br /> Port Harcourt
            <br /> 0800-1234-5678
          </p>
          <p className={styles.text}>
            35b Upper Iweka .
            <br /> Onitsha
            <br /> 0800-5444-8908
          </p>
          <p className={styles.text}>
            2 Jevenik Avenue.
            <br /> Port Harcourt
            <br /> 0800-3444-5678
          </p>
          <p className={styles.text}>
            135 Ozumba Mbadiwe.
            <br /> Lagos
            <br /> 0800-1234-5678
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
    </div>
  )
}

export default Footer