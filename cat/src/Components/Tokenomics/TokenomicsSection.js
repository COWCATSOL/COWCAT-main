import React from 'react';
import styles from './TokenomicsSection.module.css'; // Make sure this is the correct path to your CSS module
import catImage from './head.png'; // Update with the correct path to your image

const TokenomicsSection = () => {
  return (
    <div className={styles.tokenomicsSection}>
      <div className={styles.textContent}>
        <h2>CATNOMICS</h2>
        <p>10M $COWCAT</p>
        <p>All Initial LP burned</p>
        <p>No Allocations, No Presale, No Taxes, No BS</p>
        <a href="https://www.google.com" className={styles.link} target="_blank" rel="noopener noreferrer">Token Address: ➚</a>
        <a href="https://www.google.com" className={styles.link} target="_blank" rel="noopener noreferrer">Camelot Pair: ➚</a>
        <a href="https://www.google.com" className={styles.link} target="_blank" rel="noopener noreferrer">Liquidity Burned Tx: ➚</a>
      </div>
      <div className={styles.imageContainer}>
        <img src={catImage} alt="Tokenomics Cat" />
      </div>
    </div>
  );
};

export default TokenomicsSection;
