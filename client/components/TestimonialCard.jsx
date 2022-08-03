import styles from '../styles/TestimonialCard.module.css';
import Image from 'next/image'

const TestimonialCard = (props) => {
    return (
        <div>
            <div className={styles.testimonial_card}>
                <div className={styles.testimonial_card_wrapper}>
                    <div className={styles.testimonial_card_image}>
                        <Image src={props.image} alt="" width="80" height="80" objectFit='cover' />
                    </div>
                    <div className={styles.testimonial_card_text_wrapper}>
                        <div className={styles.testimonial_card_text}>
                            <h3>{props.name}</h3>
                            <span>{props.age}</span>
                            <p>{props.comment}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard