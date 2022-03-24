import Image from 'next/image'
import React from 'react'
import styles from '../styles/Featured.module.css'
import { useState, useEffect, useRef } from 'react'

const Featured = () => {
    const [index, setIndex] = useState(0);
    const delay = 5000;
    const images = [
        "/img/featured4.jpg",
        "/img/featured.jpg",
        "/img/featured1.jpg",
    ]

    const timeoutRef = useRef(null);
    function resetTimeout() {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      }
      useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
          () =>
            setIndex((prevIndex) =>
              prevIndex === images.length - 1 ? 0 : prevIndex + 1
            ),
          delay
        );
    
        return () => {
          resetTimeout();
        };
      }, [index]);

    return (
        <div className={styles.container}>
            <div className={styles.wrapper} style={{transform:`translateX(${- 100 * index }vw)`}}>
                {images.map((img, i) => (
                    <div className={styles.imageContainer} key={i}>
                        <Image src={img} alt="" layout='fill' objectFit='cover'/>
                    </div>
                ))}
            </div>
            {/* <div className={styles.arrowContainer} style={{right: 0}} onClick={()=> handleArrow("r")}>
                <Image src="/img/arrow-right.png" alt="" layout='fill' objectFit='contain'/>
            </div>
            <div className={styles.arrowContainer} style={{left: 0}} onClick={()=> handleArrow("l")} >
                <Image src="/img/arrow-left.png" alt="" layout='fill' objectFit='contain'/>
            </div> */}
        </div>
    )
}

export default Featured