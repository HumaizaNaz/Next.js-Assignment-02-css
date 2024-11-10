import React from 'react'

import Fastfoodinfo from '@/component/Fastfoodinfo/Fastfoodinfo'
import styles from './Homesection.module.css'
import Link from 'next/link'

const Homesection = () => {
  return (
    <div>
      <section className={styles['section-bg']}>
        <div className={styles.container}>
          <h1 className={styles.heading}>Taste the Best Fast Food in Town!</h1>
          <p className={styles.paragraph}>
            Craving for delicious burgers, pizzas, fries, and more? We re here to serve you the tastiest fast food, made fresh just for you!
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <Link href="#" className={styles['button-primary']}>
              Order Now
            </Link>
            <Link href="#" className={styles['button-secondary']}>
              View Menu
            </Link>
          </div>
        </div>
      </section>

      <section className={styles['fastfood-info-section']}>
        <div className={styles['fastfood-info-container']}>
          <Fastfoodinfo />
        </div>
      </section>
    </div>
  )
}

export default Homesection

