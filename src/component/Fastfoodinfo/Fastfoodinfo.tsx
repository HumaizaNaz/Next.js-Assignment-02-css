"use client"
import React, { useState } from 'react';
import styles from './Fastfoodinfo.module.css';

const Fastfoodinfo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="relative">
      <button
        onClick={openModal}
        className={styles['order-button']}
        type="button"
      >
        Order Now
      </button>

      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles['modal-content']}>
            <div className={styles['modal-inner']}>
              <div className={styles['modal-header']}>
                <h3>Special Offer on Fast Food!</h3>
                <button
                  type="button"
                  onClick={closeModal}
                  className={styles['close-button']}
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>

              <div className={styles['modal-body']}>
                <p>Welcome to FastFood Express! We are offering amazing discounts on your favorite fast foods. Get a 20% discount on all orders today!</p>
                <p>Whether it’s a pizza, burger, or fries, we have something for everyone. Hurry up and grab your order now!</p>
              </div>

              <div className={styles['modal-footer']}>
                <button
                  onClick={closeModal}
                  type="button"
                  className={styles['order-button']}
                >
                  Order Now
                </button>
                <button
                  onClick={closeModal}
                  type="button"
                  className={styles['close-button']}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Fastfoodinfo;

