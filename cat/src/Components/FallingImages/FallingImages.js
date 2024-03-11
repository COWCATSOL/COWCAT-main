// FallingImages.js
import React from 'react';
import styles from './FallingImages.module.css'; // Update with the correct path to your CSS module

const FallingImages = () => {
  const numberOfImages = 30; // Total number of images to render
  const images = [];

  for (let i = 0; i < numberOfImages; i++) {
    // Randomly choose an image
    const ImageType = Math.random() > 0.5 ? styles.cow : styles.cat;
    
    // Randomize fall duration and delay for each image
    const style = {
      '--fall-duration': `${Math.random() * 5 + 3}s`, // Between 3 and 8 seconds
      '--fall-delay': `${Math.random() * -20}s`, // Start at different times
      left: `${Math.random() * 100}%`, // Random horizontal start position
    };

    images.push(<div key={i} className={`${styles.fallingImage} ${ImageType}`} style={style}></div>);
  }

  return <>{images}</>;
};

export default FallingImages;
