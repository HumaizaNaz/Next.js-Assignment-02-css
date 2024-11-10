
"use client"
import React from 'react';
import Image from 'next/image';
import styles from './Hero.module.css'; // Import the CSS module

const Hero = () => {
  return (
    <div>
      <section className={styles['hero-section']}>
        <div className={styles['hero-grid']}>
          <div className={styles['hero-text']}>
            <p className={styles['hero-text-25']}>25% OFF</p>
            <p className={styles['hero-text-food']}>On Yummy Food</p>
            <p className={styles['hero-text-small']}>For limited time only!</p>
            <button className={styles['hero-button']}>Order Now</button>
          </div>

          <div className={styles['hero-image']}>
            <Image
              className={styles['hero-img']}
              src="/burger.png"
              alt="Yummy food"
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;



