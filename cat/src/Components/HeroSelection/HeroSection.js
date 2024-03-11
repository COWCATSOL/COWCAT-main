import React from 'react';
import styles from './HeroSection.module.css'; // Make sure to create an accompanying CSS file
import centralImage from './head.png'; // The image in the middle
import icon1 from './dex.png'; // Replace with path to your icon
import icon2 from './BE.png'; // Replace with path to your icon
import icon3 from './tele.png'; // Replace with path to your icon
import icon4 from './x.png'; // Replace with path to your icon

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.title}>
        COWCAT
      </div>
      <div className={styles.centralContent}>
        <a href="#" className={styles.iconLink}><img src={icon1} alt="Icon 1" /></a>
        <a href="#" className={styles.iconLink}><img src={icon2} alt="Icon 2" /></a>
        <img src={centralImage} alt="Central" className={styles.centralImage}/>
        <a href="https://t.me/cowcatportal" className={styles.iconLink} target="_blank" rel="noopener noreferrer"><img src={icon3} alt="Icon 3" /></a>
        <a href="https://x.com/cowcatsolana" className={styles.iconLink} target="_blank" rel="noopener noreferrer"><img src={icon4} alt="Icon 4" /></a>
      </div>
      <div className={styles.description2}>
        <p>It's literally a cat with a cow hat</p>
      </div>
      <div className={styles.description1}>
        <p>CA: TBA</p>
      </div>
    </section>
  );
};

export default HeroSection;
