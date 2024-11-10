"use client"
import React, { useState } from 'react';
import styles from './Accordion.module.css';

const Accordion: React.FC = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  // Toggle accordion visibility
  const handleToggle = (id: string) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <div className={styles.accordionContainer}>
      <div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
        
        <h2 id="accordion-flush-heading-1">
          <button
            type="button"
            className={`${styles.accordionButton} ${expanded === "1" ? styles.expanded : ""}`}
            onClick={() => handleToggle("1")}
            aria-expanded={expanded === "1"}
            aria-controls="accordion-flush-body-1"
          >
            <span>What Fast Food Options Do We Offer?</span>
            <svg
              className={`w-4 h-4 ${expanded === "1" ? "rotate-180" : ""} shrink-0`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
            </svg>
          </button>
        </h2>
        {expanded === "1" && (
          <div id="accordion-flush-body-1" className={styles.accordionBody}>
            <p>We offer a wide range of delicious fast food options including burgers, fries, pizzas, and fresh salads, all made with the highest quality ingredients.</p>
            <p>Explore our full menu to find your favorite meal. <a href="/products">Explore Our Full Menu</a></p>
          </div>
        )}

        {/* Accordion Item 2 */}
        <h2 id="accordion-flush-heading-2">
          <button
            type="button"
            className={`${styles.accordionButton} ${expanded === "2" ? styles.expanded : ""}`}
            onClick={() => handleToggle("2")}
            aria-expanded={expanded === "2"}
            aria-controls="accordion-flush-body-2"
          >
            <span>Do We Offer Vegan Options?</span>
            <svg
              className={`w-4 h-4 ${expanded === "2" ? "rotate-180" : ""} shrink-0`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
            </svg>
          </button>
        </h2>
        {expanded === "2" && (
          <div id="accordion-flush-body-2" className={styles.accordionBody}>
            <p>Yes! We offer a variety of vegan-friendly options including plant-based burgers, wraps, and fresh veggie salads that are both delicious and nutritious.</p>
            <p>Check out our <a href="/menu#vegan">Vegan Menu</a> for more options.</p>
          </div>
        )}

        {/* Accordion Item 3 */}
        <h2 id="accordion-flush-heading-3">
          <button
            type="button"
            className={`${styles.accordionButton} ${expanded === "3" ? styles.expanded : ""}`}
            onClick={() => handleToggle("3")}
            aria-expanded={expanded === "3"}
            aria-controls="accordion-flush-body-3"
          >
            <span>How Do I Order for Delivery?</span>
            <svg
              className={`w-4 h-4 ${expanded === "3" ? "rotate-180" : ""} shrink-0`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
            </svg>
          </button>
        </h2>
        {expanded === "3" && (
          <div id="accordion-flush-body-3" className={styles.accordionBody}>
            <p>You can easily place an order for delivery through our mobile app or website. We offer fast delivery to your door, so you can enjoy your favorite meals from the comfort of your home.</p>
            <p>Download the app or visit our <a href="/delivery">Delivery Page</a> to order now.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Accordion;

