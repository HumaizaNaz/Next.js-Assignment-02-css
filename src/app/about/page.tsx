import React from 'react';
import Image from 'next/image';
import Accordion from '@/component/According/Accordion';
import styles from './about.module.css';

const Page = () => {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div>
              <h2 className={styles.heading}>
                Hey 👋 we are
                <br className="block sm:hidden" /> Thanking you for choosing us
              </h2>
              <p className={styles.paragraph}>
                We believe in offering delicious, quick, and satisfying meals made with high-quality ingredients. We specialize in a variety of fast food options, from classic burgers and crispy fries to tasty sandwiches and fresh salads. Whether you’re craving something savory or looking for a quick bite, our menu is designed to satisfy every taste. Our goal is to provide a fast and enjoyable dining experience that keeps you coming back for more. With a focus on quality, affordability, and customer satisfaction, we ensure every meal is a delightful experience.
              </p>

              <p className={styles.link}>
                <span className="relative inline-block">
                  <span className="absolute inline-block w-full bottom-0.5 h-2"></span>
                  <span className="relative">Have a question?</span>
                </span>
                <br className="block sm:hidden" /> Ask me on{' '}
                <a
                  href="#"
                  title=""
                  className={styles.link}
                >
                  Twitter
                </a>
              </p>
            </div>

            <div className="relative">
              <Image
                className={styles['image-absolute']}
                src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
                alt="Shape"
                width={500}
                height={500}
                layout="intrinsic"
              />

              <Image
                className={styles['image-relative']}
                src="/girl-remove.png"
                alt="Business Woman"
                width={600}
                height={600}
                layout="intrinsic"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <Accordion />
      </section>
    </>
  );
};

export default Page;
