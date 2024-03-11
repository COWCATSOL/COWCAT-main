// HeaderOrFooter.js
import React from 'react';
import styles from './HeaderFooter.module.css'; // Ensure correct path

const Header = () => {
  // Create an array to hold the repeating pattern of image and text
  const movingItems = [];
  for (let i = 0; i < 200; i++) { // Adjust the number as necessary
    movingItems.push(
      <div key={i} className={styles.movingItem}>
        <span className={styles.movingItemText}>Buy Now</span>
        <div className={styles.movingItemImage}></div>
      </div>
    );
  }

  return (
    <div className={styles.movingBar}>
      <div className={styles.movingContent}>
        {movingItems}
      </div>
    </div>
  );
};

export default Header;
