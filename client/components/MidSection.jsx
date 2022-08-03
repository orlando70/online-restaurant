import styles from '../styles/MidSection.module.css'
import Image from 'next/image'
import testimonial from '../assets/testimonial.json'
import TestimonialCard from './TestimonialCard'

const MidSection = ({ Foods }) => {
    return (
        <div className={styles.container}>
            <div className={styles.choose}>
                <div className={styles.chooseLeft}>
                    <h2>
                        why choose us for your<span> healthy food</span>
                    </h2>
                </div>
                <div className={styles.chooseRight}>
                    <p>
                        We continue to consistently choose and maintain the quality of food served, so that it remains fresh and nutritious when you eat it.
                    </p>
                </div>
            </div>
            <div className={styles.chooseCard}>
                <div className={styles.left}>
                    <div className={styles.cardWrapper}>
                        <div className={styles.icon}>
                            <div className={styles.box2}></div>
                            <div className={styles.box1}></div>
                            <div className={styles.iconImage}>
                                <Image src="/img/orchad.png" alt="Orchad" width="50" height="50" />
                            </div>
                        </div>
                        <div className={styles.cardDesc}>
                            <h5>Own fruit orchad</h5>
                            <p>
                                We grow our fruits with utmost care and we often have a lot of information about the fruit.
                            </p>
                            <button className={styles.button}>Learn more</button>
                        </div>
                    </div>
                </div>
                <div className={styles.center}>
                    <div className={styles.cardWrapper}>
                        <div className={styles.icon}>
                            <div className={styles.box2}></div>
                            <div className={styles.box1}></div>
                            <div className={styles.iconImage}>
                                <Image src="/img/orchad.png" alt="Orchad" width="50" height="50" />
                            </div>
                        </div>
                        <div className={styles.cardDesc}>
                            <h5>#1 Healthy Fruit Salad</h5>
                            <p>
                                The pioneer of healthy fruit salads that are delicious and suitable for all people with the best qualit assurance.
                            </p>
                            <button className={styles.button}>Learn more</button>
                        </div>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.cardWrapper}>
                        <div className={styles.icon}>
                            <div className={styles.box2}></div>
                            <div className={styles.box1}></div>
                            <div className={styles.iconImage}>
                                <Image src="/img/orchad.png" alt="Orchad" width="50" height="50" />
                            </div>
                        </div>
                        <div className={styles.cardDesc}>
                            <h5>100 Top Brand</h5>
                            <p>
                                We are one of the best brands in the Food and Beverage sector in Nigeria.
                            </p>
                            <button className={styles.button}>Learn more</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.testimonial}>
                <div className={styles.testimonialLeft}>
                    <div className={styles.testimonial_wrapper}>
                        <h1>
                            What Are People Saying <span>About Us</span>
                        </h1>
                        <p>
                            We are very happy if you are satisfied with our services and products, let's read pure reviews from customers who bought our products.
                        </p>
                        <div className={styles.arrowContainer}>
                            <div className={styles.arrowLeft}></div>
                            <div className={styles.arrowRight}></div>
                        </div>
                    </div>
                </div>
                <div className={styles.testimonialRight}>
                    <TestimonialCard name={testimonial[0].name} age={testimonial[0].age} comment={testimonial[0].comment} image={testimonial[0].image} />
                    <TestimonialCard name={testimonial[1].name} age={testimonial[1].age} comment={testimonial[1].comment} image={testimonial[1].image} />
                    <TestimonialCard name={testimonial[2].name} age={testimonial[2].age} comment={testimonial[2].comment} image={testimonial[2].image} />
                </div>
            </div>
        </div>
    )
}

export default MidSection