import Image from 'next/image'
import React from 'react'
import styles from '../styles/Featured.module.css'
import { useState, useEffect, useRef } from 'react'
import Slide1 from '../slides/slide1'
import Slide2 from '../slides/slide2'
import Slide3 from '../slides/slide3'

const Featured = () => {
    const [index, setIndex] = useState(0);
    const delay = 5000;
    const images = [
        <Slide1/>,
        <Slide2/>,
        <Slide3/>,
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
                        {img}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Featured