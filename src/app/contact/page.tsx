import React from 'react';
import styles from './contact.module.css';

const page = () => {
  return (
    <>
      <section className={styles.section}>
        <div className={`${styles.container} ${styles["container-lg"]}`}>
          <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
            <h2 className={styles.title}>Visit Our Location</h2>
            <p className={styles.subtitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="mt-16 lg:mt-20">
            <div className={`${styles.grid} ${styles["grid-cols-1"]} ${styles["md:grid-cols-2"]}`}>
              <div className={styles.map}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=..."
                  className={styles.iframe}
                  allowFullScreen={true}
                  loading="lazy"
                ></iframe>
              </div>
              <div>
                <div className={styles.card}>
                  <div className={styles["card-header"]}>
                    <h3>Our Address</h3>
                    <p className={styles["card-body"]}>123 Main St, San Francisco, CA 94105</p>
                  </div>
                  <div className={`${styles["card-body"]} ${styles["border-top"]}`}>
                    <h3>Hours</h3>
                    <p>Monday - Friday: 9am - 5pm</p>
                    <p>Saturday: 10am - 4pm</p>
                    <p>Sunday: Closed</p>
                  </div>
                  <div className={`${styles["card-body"]} ${styles["border-top"]}`}>
                    <h3>Contact</h3>
                    <p>Email: info@example.com</p>
                    <p>Phone: +1 23494 34993</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default page;


